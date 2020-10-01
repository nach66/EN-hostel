import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Loading from '../components/Loading';
import Footer from '../components/Footer'
import LangButtons from '../LangButtons'
import { Link } from 'react-router-dom'

export default class Booking extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isloading: true
        }
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({
                isloading: false
            });
        }.bind(this), 1000);
    }
    

    render() {
        return (
            <>
                <LangButtons {...this.props} />
                <div className="sep"/>
                        
                    <div
                        style={{
                            padding: '0rem',
                            textAlign: 'center',
                            direction: 'ltr'
                        }}
                    >
                        <h6>For group reservations of 10 or more people, please</h6>
                        <Link 
                                style={{
                                    fontWeight: '600',
                                    color: 'rgb(0, 88, 139)',
                                    fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif'
                                }}
                                to="/en/contact" > contact us :) 
                        </Link>
                    </div>                    

                        {this.state.isloading && <Loading/>}

                        <iframe id="be_iframe" frameborder="0.5" scrolling="yes" title="booking"
                                    style={{width: '100%', height:'2850px', 
                                    padding:'30px', overflow: 'hidden'}}  
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