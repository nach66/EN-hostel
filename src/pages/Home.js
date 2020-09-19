import React, { Component } from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'

export default function Home() {

    return (
        <>
            <Images title="Tiberias hostel" 
                    subtitle="YOUR HOME BASE IN NORTH ISRAEL"
            />
                <Search/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
        </>
    );
}