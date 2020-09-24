import React, { Component } from 'react'
import {FaCalendarAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import 'lightbox-react/style.css';
import ContactForm from '../components/ContactForm';
import StyledHero from "../components/StyledHero";
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import {RoomContext} from '../contextRooms';
import def from '../images/def.jpg';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            def
        };
    }
    static contextType = RoomContext;
    
    render() {        
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        console.log(room);
        if (!room){
            return (
                <div className="error">
                    <h3>לצערנו אין חדר כזה</h3>
                    <Link to="/rooms" className="btn-primary2">
                        בחזרה לחדרים
                    </Link>
                </div>
            );
        }
        const {name, description,
            extras, images} = room;
        const [mainImg,...defuldImg] = images;
            
        return (
            <>
                <StyledHero img={mainImg || def}>
                    <Banner title={name}>
                        <Link to="/rooms" className="btn-primary2">
                            בחזרה לחדרים
                        </Link>
                    </Banner>
                </StyledHero>
                <div className="sep"/>

                <section className="room-section">
                    <div className="container" style={{marginTop: '70px'}}>
                        {defuldImg.map((item,index)=>{
                            return ( <div
                                key={index} alt="pic"
                                style={{backgroundImage: `url(${item})`}}
                                onClick={() => this.setState({ isOpen: true, photoIndex: index })}
                                ></div>);                       
                        })}
                    </div>
                </section>
                <section className="room-section">
                    <h3>פרטים</h3>
                    <p>{description.content[0].content[0].value}</p>
                </section>
                <section className="room-section">
                    <h3>מידע ומתקנים</h3>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return<li key={index}>
                                - {item}
                                </li> 
                        })}
                    </ul>
                </section>

                <section className="empty-services">                    
                    <Link to="/bookhere" 
                            className="book-now-btn"
                            >הזמן עכשיו!
                        <span className="calander-icon">
                            <FaCalendarAlt/>
                        </span>
                    </Link>
                </section>

                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}