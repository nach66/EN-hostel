import React from 'react'
import ContactForm from '../components/ContactForm'
import RoomsList from '../components/RoomsList'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import Title from '../components/Title'
import {RoomConsumer} from '../contextRooms';
import LangButtons from '../LangButtons'

export default function PublicRooms(props) {
    return (
        <RoomConsumer>
            {value => {
                const {loading, publicRooms} = value;
                if (loading) {
                    return <Loading/>;
                }                    
                return (
                    <>
                        <LangButtons {...props} />
                        <div className="sep"/>
                        <Title title="Dormitories" />
                        <section className="empty-services">
                            <h6 className="lang">Our shared dormitories can accommodate 8-10 people. The shared dormitories have toilets and showers shared outside the room.</h6>
                        </section>
                        <RoomsList rooms={publicRooms}/>
                        <ContactForm/>
                        <Footer/>
                    </>
                );
            }}
        </RoomConsumer>
    );
}
