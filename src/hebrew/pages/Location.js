import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import OLMap from '../components/OLMap'

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="sep"/>
                <OLMap/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}