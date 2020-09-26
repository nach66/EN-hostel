import React from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'
import LangButtons from '../LangButtons'

export default function Home(props) {

    return (
        <>
            <LangButtons {...props} />
            <Images title="אכסניית טבריה" 
                    subtitle="הבית שלך בצפון"
                    link="/he/rooms"
                    link_text="לחדרים שלנו"
            />
            <Search/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    );
}