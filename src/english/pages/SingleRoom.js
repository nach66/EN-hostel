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
import LangButtons from '../LangButtons'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params[0].substring(6),
            def
        };
    }
    static contextType = RoomContext;
    
    render() {        
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room){
            return (
                <div className="error">
                    <h3 className="lang">something wrong...</h3>
                    <Link to="/en/rooms" className="btn-primary2">
                        back to rooms
                    </Link>
                </div>
            );
        }
        const {name, description,
            extras, images} = room;
        const [mainImg,...defuldImg] = images;
            
        return (
            <>
                <LangButtons {...this.props} />
                <StyledHero img={mainImg || def}>
                    <Banner title={name}>
                        <Link to="/en/rooms" className="btn-primary2">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <div className="sep"/>

                <section className="room-section">
                    <div className="container lang" style={{marginTop: '70px'}}>
                        {defuldImg.map((item,index)=>{
                            return ( <div
                                key={index} alt="pic"
                                style={{backgroundImage: `url(${item})`}}
                                onClick={() => this.setState({ isOpen: true, photoIndex: index })}
                                ></div>);                       
                        })}
                    </div>
                </section>
                <section className="room-section lang">
                    <h3 className="lang">details</h3>
                    <p>{description.content[0].content[0].value}</p>
                </section>
                <section className="room-section lang">
                    <h3 className="lang">extras</h3>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return<li key={index}>
                                - {item}
                                </li> 
                        })}
                    </ul>
                </section>

                <section className="empty-services lang">                    
                    <Link to="/bookhere" 
                            className="book-now-btn"
                            >book now!
                        <span className="calander-icon"
                            style={{marginLeft:'2px'}}
                        >
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