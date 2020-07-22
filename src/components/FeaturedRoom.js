import React, { Component } from 'react'
import {RoomContext} from '../context';
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";
import { Link } from 'react-router-dom'

export default class FeaturedRoom extends Component {    
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>;
        });
        return (
            <section className="roomslist">
                <Title title="חדרים "/>
                <div className="roomslist-center">
                    {loading? <Loading/> : rooms}
                </div>
            </section>
        );
    }
}