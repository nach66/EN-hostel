import React, { Component } from 'react'
import Footer from '../components/Footer'
import {FaEnvelope,FaPhone} from 'react-icons/fa';
import ContactForm from '../components/ContactForm'
import Title from '../components/Title';
import {animateScroll as scroll } from 'react-scroll'

export default class minihotel extends Component {
    componentDidMount () {
        scroll.scrollTo(0);
    }

    render() {
        return (
            <>
                <div className="sep"/>
                    <section className="empty-services">
                        <Title title="BOOK  YOUR STAY NOW ON OUR SITE!"/>
                        <h6>For group reservations of 10 or more people, please contact us:</h6>
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
                        </section>
                        <iframe id="be_iframe" frameborder="1" scrolling="yes" title="booking"
                                    style={{width: '100%', height:'500px', padding:'30px', overflow: 'hidden'}} 
                                    onload="window.scrollTo(0,0)"
                                    src="https://minihotelpms.net/frame/reservas?hotelToken=a41ce7814d16061ac9a951e3bb1c534e||from=||to=||nAdults=1||nChilds=0||nBabies=0||start_date=||end_date=||language=EN||currency=ILS||rateCode=*ALL||roomId=||bloggerId=">
                        </iframe>
                    <div className="sep"/>
                    <ContactForm/>
                    <Footer/>
                </>
        )
    }
}

/* <iframe title="book" width="95%" height="600px" scrolling="auto"
src="https://new-booking.frontdeskmaster.com?hostelId=AJKOwMNX%2F5UDIgGxDhqQRY6JrRNTS%2BGr"/> */