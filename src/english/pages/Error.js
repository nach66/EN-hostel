import React from 'react'
import Images from '../components/Images';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import LangButtons from '../LangButtons'

export default function Error(props) {
    return (
            <>
            <LangButtons {...props} />
            <Images title="404" 
                subtitle="page not found"
                link="/en/"
                link_text="back to hampage"
            />
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
            </>
    )
}