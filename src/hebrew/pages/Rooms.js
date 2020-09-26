import React from 'react'
import Footer from '../components/Footer'
//import RoomsFilter from '../components/RoomsFilter';
import ContactForm from '../components/ContactForm'
import Services from '../components/Servies'
import {Link} from 'react-router-dom'
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
                    style={{
                        paddingLeft: '24px',
                        paddingRight: '24px'
                    }}
                    to="/he/private" >לחדרים הפרטיים</Link>
                <Link className="btn-primary2 room-btns"
                    to="/he/public" >לחדרים המשותפים</Link>
        </section>
    );
}