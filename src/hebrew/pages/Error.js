import React from 'react'
import Images from '../components/Images';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Error() {
    return (
            <>
            <Images title="404" 
                subtitle="page not found"
                link="/"
                link_text="חזרה לעמוד הבית"
            />
                        <div className="sep"/>
            <ContactForm/>
            <Footer/>
            </>
    )
}