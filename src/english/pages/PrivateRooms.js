import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import RoomsList from '../components/RoomsList';
import Title from '../components/Title';
import Loading from '../components/Loading';
import {RoomConsumer} from '../contextRooms';
import LangButtons from '../LangButtons'

export default function PrivateRooms(props) {
    return (
        <RoomConsumer>
            {value => {
                const {loading, privateRooms} = value;
                if (loading) {
                    return <Loading/>;
                }                    
                return (
                    <>
                        <LangButtons {...props} />
                        <div className="sep"/>
                        <Title title="Private rooms" />
                        <section className="empty-services">
                            <h6 className="lang">Our private rooms can accommodate 2-4 people. In the private rooms the toilet and shower are ensuite.</h6>
                        </section>
                        <RoomsList rooms={privateRooms}/>
                        <ContactForm/>
                        <Footer/>
                    </>
                );
            }}
        </RoomConsumer>
    );
}
