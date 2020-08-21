import React, { Component } from 'react'
import Images from '../components/Images'
import Footer from '../components/Footer'
import {FaCalendarAlt,FaEnvelope,FaPhone} from 'react-icons/fa';
import ContactForm from '../components/ContactForm'
import Title from '../components/Title';

export default class minihotel extends Component {

    render() {
        return (
            <>
                <Images title="הזמנה" link="/"
                        link_text="חזרה לעמוד הבית"/>
                <div className="sep"/>
                    <section className="empty-services">
                        <Title title="הזמנה ישירה"/>
                        <h6>להזמנות קבוצתיות של 10 אנשים ומעלה, אנא פנו אלינו - בדוא"ל או בטלפון</h6>
                            <article>
                                <FaPhone style={{ color:'rgb(7, 161, 58)'}}/>
                                <h6>04-679-2611</h6>
                            </article>
                            <article>
                                <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                                <FaEnvelope style={{ color:'#ebe050'}}/></a>
                                <h6>tiberiashostel@gmail.com</h6>
                            </article>
                            <br/>
                            <a rel="noopener noreferrer" target="_blank" className="book-now-btn"
                                href={
"https://minihotelpms.net/frame/reservas/getAvailability?hotelToken=a41ce7814d16061ac9a951e3bb1c534e&nAdults=1&nChilds=0&nBabies=0&language=HE&rateCode=*ALL&roomId=&from=2020-08-21&to=2020-08-22&minToDate=2020-08-22&nochesPedidas=1&bloggerId=&languageDirection=rtl"
                                }
                                >
                                    הזמן עכשיו!
                                    <span className="calander-icon">
                                        <FaCalendarAlt/>
                                    </span>
                            </a>

                        </section>
                    <div className="sep"/>
                    <ContactForm/>
                    <Footer/>
                </>
        )
    }
}

/* <iframe title="book" width="95%" height="600px" scrolling="auto"
src="https://new-booking.frontdeskmaster.com?hostelId=AJKOwMNX%2F5UDIgGxDhqQRY6JrRNTS%2BGr"/> */