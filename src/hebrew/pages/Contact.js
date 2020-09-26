import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'
import LangButtons from '../LangButtons'

export default function Contact(props) {
        return (
            <>
                <LangButtons {...props} />
                <br/>
                <Search/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
}