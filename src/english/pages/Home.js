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
            <Images title="Tiberias hostel" 
                subtitle="YOUR HOME BASE IN NORTH ISRAEL"
                link="/en/rooms"
                link_text="our rooms"
            />
            <Search/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    );
}