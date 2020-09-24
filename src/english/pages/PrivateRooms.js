import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import RoomsList from '../components/RoomsList';
import Title from '../components/Title';
import Loading from '../components/Loading';
import {RoomConsumer} from '../contextRooms';

export default function PrivateRooms() {
    return (
        <RoomConsumer>
            {value => {
                const {loading, privateRooms} = value;
                if (loading) {
                    return <Loading/>;
                }                    
                return (
                    <>
                        <div className="sep"/>
                        <Title title="חדרים פרטיים" />
                        <RoomsList rooms={privateRooms}/>
                        <ContactForm/>
                        <Footer/>
                    </>
                );
            }}
        </RoomConsumer>
    );
}
