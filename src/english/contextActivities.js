import React, { Component } from 'react'
//import items from './data';
import Client from './Contentful';
const ActivityContext = React.createContext();

export default class ActivityProvider extends Component {
    state = {
        activities: [],
        restActivities: [],
        waterActivities: [],
        attractionActivities: [],
        loading: true,
        rest: false,
        water: false,
        attraction: false
    };

    getData = async () => {
        try {

        let response = await Client.getEntries({
            content_type: "en_activ",
            order:"sys.createdAt"
        });
        console.log(response);
        let activities = this.formatData(response.items);
        let restActivities = activities.filter(activity => activity.rest === true);
        let waterActivities = activities.filter(activity => activity.water === true);
        let attractionActivities = activities.filter(activity => activity.attraction === true);
        this.setState({
            activities,
            restActivities,
            waterActivities,
            attractionActivities,
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
            let image = item.fields.images.fields.file.url;    
            let activity = { ...item.fields, image, id };
            return activity;
        });
        return tempItems;
    };

    getActivity = slug => {
        let tempActivities = [...this.state.activities];
        const activity = tempActivities.find(activity => activity.slug === slug);
        return activity;
    };

    render() {
        return (
            <ActivityContext.Provider 
                value={{
                ...this.state, 
                getActivity: this.getActivity
                }}
            >
                {this.props.children}                
            </ActivityContext.Provider>                
            );
        }
    }

const ActivityConsumer = ActivityContext.Consumer;

export {ActivityConsumer, ActivityProvider, ActivityContext}