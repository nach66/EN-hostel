import React from 'react'
import {Link} from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Services from '../components/Servies'
import Footer from '../components/Footer'
import LangButtons from '../LangButtons'

export default function Rooms(props) {
    return (
        <>
            <LangButtons {...props} />
            <div className="sep"/>
            <Services/>
            <RoomsFilter/>
            <div className="sep"/>
            <ContactForm/>
            <Footer/>
        </>
    );
}

function RoomsFilter() {
    return (
        <section className="btn-room-contain">
                <Link className="btn-primary2 room-btns"
                    to="/en/private" >Private rooms</Link>
                <Link className="btn-primary2 room-btns"
                    style={{
                        paddingLeft: '18px',
                        paddingRight: '18px'
                    }}
                    to="/en/public" >Public rooms</Link>
        </section>
    );
}