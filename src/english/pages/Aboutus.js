import React, { Component } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'
import Gallerys from '../components/Gallerys'
import Search from '../components/Search'

export default class Aboutus extends Component {
    render() {
        return (
            <>
                <br/>
                <Search/>
                <div className="sep"/>
                <About/>
                <div className="sep"/>
                <Gallerys/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}