import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'
import Gallerys from '../components/Gallerys'
import Search from '../components/Search'
import LangButtons from '../LangButtons'

export default function Aboutus(props) {
        return (
            <>
                <LangButtons {...props} />
                <div className="sbest_price"
                    style={{
                        zIndex: '1'
                    }}/>
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