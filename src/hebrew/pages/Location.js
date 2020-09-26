import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import OLMap from '../components/OLMap'
import LangButtons from '../LangButtons'

export default function Location(props) {
    return (
            <>
                <LangButtons {...props} />
                <div className="sep"/>
                <OLMap/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
    );
}