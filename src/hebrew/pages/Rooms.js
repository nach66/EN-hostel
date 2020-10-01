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

                        <Title title="חדרים פרטיים"/> 
                        <section className="empty-services">
                            <h6>החדרים הפרטיים שלנו יכולים להכיל 1-4 אנשים. בחדרים הפרטיים השירותים והמקלחת הם בתוך החדר.</h6>
                        </section>
                        <RoomsList rooms={privateRooms}/>
                        <div className="sep"/>

                        <Title title="חדרים משותפים"/>
                        <section className="empty-services">
                            <h6>החדרים משותפים שלנו מכילים 8-10 אנשים. לחדרים המשותפים יש שירותים ומקלחות מחוץ לחדר.</h6>
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