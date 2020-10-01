import LangButtons from '../LangButtons'
import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'

export default function Contact(props) {

        return (
            <>
                <LangButtons {...props} />
                <div className="sbest_price_en"
                    style={{
                        zIndex: '1'
                    }}/>
                <br/>
                <Search/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
}