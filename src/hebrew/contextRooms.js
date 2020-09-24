import React, { Component } from 'react'
//import items from './data';
import Client from './Contentful';
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    privateRooms: [],
    publicRooms: [],
    loading: true,
    type: 'all'
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "room",
        order:"sys.createdAt"
      });
      console.log('h '+response);
      let rooms = this.formatData(response.items);
      let privateRooms = rooms.filter(room => room.type === "פרטי");
      let publicRooms = rooms.filter(room => room.type === "משותף");
      
      this.setState({
          rooms,
          privateRooms,
          publicRooms,
          loading: false
        });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount () {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);    
        let room = { ...item.fields, images, id };
        return room;
      });
    return tempItems;
  };

    getRoom = slug => {
      let tempRooms = [...this.state.rooms];
      const room = tempRooms.find(room => room.slug === slug);
      return room;
    };

    render() {
      return (
        <RoomContext.Provider 
          value={{
            ...this.state, 
            getRoom: this.getRoom,
            handleChange: this.handleChange
          }}
        >
          {this.props.children}                
        </RoomContext.Provider>                
      );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomConsumer, RoomProvider, RoomContext}