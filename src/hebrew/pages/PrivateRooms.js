import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import RoomsList from '../components/RoomsList';
import {RoomConsumer} from '../contextRooms';
import Title from '../components/Title';
import Loading from '../components/Loading';
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
                        <Title title="חדרים פרטיים" />
                        <section className="empty-services">
                            <h6>החדרים הפרטיים שלנו יכולים להכיל 1-4 אנשים. בחדרים הפרטיים השירותים והמקלחת הם בתוך החדר.</h6>
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
