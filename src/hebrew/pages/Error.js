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
                subtitle="העמוד לא נמצא"
                link="/he/"
                link_text="חזרה לעמוד הבית"
            />
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
            </>
    )
}