import React, { Component } from 'react'
import Images from '../components/Images'
import Footer from '../components/Footer'
import {FaEnvelope,FaPhone} from 'react-icons/fa';

export default class Booking extends Component {
    render() {
        return (
            <>
                <Images title="הזמנה" link="/"
                    link_text="חזרה לעמוד הבית"/>

                <section className="empty-services">
                    <h5>להזמנות קבוצתיות של 10 אנשים ומעלה, אנא פנו אלינו - בדוא"ל, בטלפון, או בעזרת הצ'אטבוט</h5>
                        <article>
                            <FaPhone style={{ color:'rgb(7, 161, 58)'}}/>
                            <h5>04-679-2611</h5>
                        </article>
                        <article>
                            <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                            <FaEnvelope style={{ color:'#ebe050'}}/></a>
                            <h5>tiberiashostel@gmail.com</h5>
                        </article>
                    <iframe width="85%" height="600px" scrolling="auto"
                        src="https://new-booking.frontdeskmaster.com?hostelId=AJKOwMNX%2F5UDIgGxDhqQRY6JrRNTS%2BGr"/>
                </section>
                <Footer/>
            </>
        )
    }
}