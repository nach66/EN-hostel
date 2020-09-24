import React from 'react'
import ContactForm from '../components/ContactForm'
import RoomsList from '../components/RoomsList'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import Title from '../components/Title'
import {RoomConsumer} from '../contextRooms';

export default function PublicRooms() {
    return (
        <RoomConsumer>
            {value => {
                const {loading, publicRooms} = value;
                if (loading) {
                    return <Loading/>;
                }                    
                return (
                    <>
                        <div className="sep"/>
                        <Title title="חדרים משותפים" />
                        <RoomsList rooms={publicRooms}/>
                        <ContactForm/>
                        <Footer/>
                    </>
                );
            }}
        </RoomConsumer>
    );
}
