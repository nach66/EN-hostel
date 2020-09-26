import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ActivitiesContainer from '../components/ActivitiesContainer';
import LangButtons from '../LangButtons'

export default function Activities(props) {
    return (
        <>
            <LangButtons {...props} />
            <div className="sep"/>
            <ActivitiesContainer/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    )
}
