import React from 'react'
import Title from './Title'
import {FaMapMarked, FaEnvelope,FaPhone} from 'react-icons/fa';
import tripadvisor from '../images/icons/tripadvisor.png'
import instagram from '../images/icons/instagram.jpg'
import ilh from '../images/icons/ilh.png'
import face from '../images/icons/fa.png'

export default function ContactForm() {

    return (
        <>
            <section className="services">
                <Title title="GET IN TOUCH"/> 
                <div className="about">
                    <article style={{
                        paddingTop:'4px'
                    }}>
                        <h6>Don't hesitate to contact us with any inquiry, we'll answer at reception hours 8:00-23:00.</h6>
                        <a href="tel:04-679-2611">
                                <FaPhone style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'rgb(7, 161, 58)'}}/>
                            </a>
                        <h6>04-679-2611</h6>

                        <a href={"mailto:tiberiashostel@gmail.com"} rel="noopener noreferrer" target="_blank">
                                <FaEnvelope style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'#ebe050'}}/>
                            </a>
                        <h6>tiberiashostel@gmail.com</h6>

                        <a href={"https://www.google.co.il/maps/place/Tiberias+Hostel/@32.7886111,35.5219349,14z/data=!4m11!1m2!2m1!1z15DXm9eh16DXmdeZ16og15jXkdeo15nXlA!3m7!1s0x151c3e48ddd195df:0x2bf279e8d24c26b4!5m2!4m1!1i2!8m2!3d32.7886111!4d35.5394444"} rel="noopener noreferrer" target="_blank">
                                <FaMapMarked style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'var(--myblue)'}}/>
                            </a>

                        <h6>Rabin Square, Tiberias. Zip: 1411501. P.O Box 1514.</h6>
                        <h6>Entrance to the right of the Beinleumi Bank.</h6>

                        <div className="contact-icon">
                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.facebook.com/tiberiashostel/'>
                                <div style={{backgroundImage: `url(${face})`}}/>   
                            </a>

                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.tripadvisor.co.il/Hotel_Review-g297765-d1198814-Reviews-Tiberias_Hostel-Tiberias_Galilee_Region_Northern_District.html'>
                                <div style={{backgroundImage: `url(${tripadvisor})`}}/>   
                            </a> 

                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='http://www.hostels-israel.com/'>
                                <div style={{backgroundImage: `url(${ilh})`}}/>   
                            </a> 

                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.instagram.com/tiberiashostel/'>
                                <div style={{backgroundImage: `url(${instagram})`}}/>   
                            </a>
                        </div>
                    </article>

                    <article>
                        <h6>Talk to us:</h6>
                        <section>
                            <form className="cform" method="POST"
                                action="https://formspree.io/tiberiashostel@gmail.com"
                            >
                                {/* name */}
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            placeholder="what's your name?"
                                        />
                                        </div>
                                {/* email */}
                                        <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="what's your email?"
                                        />
                                        </div>
                                {/* phone */}
                                        <div className="form-group">
                                            <input
                                            type="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="what's your phone number?"
                                        />
                                        </div>
                                {/* message */}
                                        <div className="form">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            rows="13"
                                            placeholder="how can we help?"
                                        />
                                        </div>
                                        {/* sumbit */}
                                        <input 
                                            type="submit"
                                            value="submit"
                                            style={{
                                                position: 'relative',
                                                bottom:'23px',
                                                color: 'var(--mainBlack)',
                                                background: 'var(--primaryColor)',
                                                padding: '0.4rem 0.9rem',
                                                border: '3px solid var(--primaryColor)',
                                                cursor: 'pointer'
                                            }}
                                        />
                            </form>
                        </section>
                    </article>
                </div>
            </section>
        </>
    );
}