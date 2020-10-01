import React from 'react'
import RoomsList from '../components/RoomsList';
import {RoomConsumer} from '../contextRooms';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Title from '../components/Title';
import LangButtons from '../LangButtons'

export default function Rooms(props) {
    return (
        <>
        <RoomConsumer>
            {value => {
                const {loading, publicRooms, privateRooms} = value;
                if (loading) {
                    return <Loading/>;
                }
                return (
                    <>
                        <LangButtons {...props} />
                        <div className="sep"/>

                        <Title title="Private Rooms"/> 
                        <section className="empty-services">
                            <h6 className="lang">Our private rooms can accommodate 1-4 people. In the private rooms the toilet and shower are ensuite.</h6>
                        </section>
                        <RoomsList rooms={privateRooms}/>
                        <div className="sep"/>

                        <Title title="Shared Dormitories"/>
                        <section className="empty-services">
                            <h6 className="lang">Our shared dormitories can accommodate 8-10 people. The shared dormitories have toilets and showers shared outside the room.</h6>
                        </section>
                        <RoomsList rooms={publicRooms}/>
                        <div className="sep"/>
                        <Footer/>
                    </>
                );
            }}
        </RoomConsumer>
        </>
    );
}