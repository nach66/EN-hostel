import React from 'react'
import Footer from '../components/Footer'
//import RoomsFilter from '../components/RoomsFilter';
import ContactForm from '../components/ContactForm'
import Services from '../components/Servies'
import {Link} from 'react-router-dom'

export default function Rooms() {
    return (
        <>
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
        <section className="filter-form">
                <Link className="btn-primary2 filter-btns"
                    to="/private" >לחדרים הפרטיים</Link>
                <Link className="btn-primary2 filter-btns"
                    to="/public" >לחדרים המשותפים</Link>
        </section>
    );
}