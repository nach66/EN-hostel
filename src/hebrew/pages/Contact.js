import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'
import LangButtons from '../LangButtons'

export default function Contact(props) {
        return (
            <>
                <LangButtons {...props} />
                <div className="sbest_price"
                    style={{
                        zIndex: '1'
                    }}/>
                <Search/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
}