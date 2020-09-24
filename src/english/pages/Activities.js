import React from 'react'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ActivitiesContainer from '../components/ActivitiesContainer';

export default function Rest() {
    return (
        <>
            <div className="sep"/>
            <ActivitiesContainer/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    )
}
