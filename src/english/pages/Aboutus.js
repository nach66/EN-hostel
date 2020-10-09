import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import About from '../components/About'
import Gallerys from '../components/Gallerys'
import Search from '../components/Search'
import LangButtons from '../LangButtons'
import Services from '../components/Services'

export default function Aboutus(props) {
        return (
            <>
                <LangButtons {...props} />
                <div className="sbest_price_en"
                    style={{
                        zIndex: '1'
                    }}/>
                <Search/>
                <div className="sep"/>
                <About/>
                <div className="sep"/>
                <Services/>
                <Gallerys/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
}