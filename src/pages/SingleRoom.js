import React, { Component } from 'react'
import ContactForm from '../components/ContactForm';
import StyledHero from "../components/StyledHero";
import {RoomContext} from '../contextRooms';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import def from '../images/def.jpg';
import {FaCalendarAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import {animateScroll as scroll } from 'react-scroll'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            photoIndex: 0,
            isOpen: false,
            slug:this.props.match.params.slug,
            def
        };
    }

    componentDidMount () {
        scroll.scrollToTop(0);
    }

    handleExpand() {
        this.setState({ isOpen: true });
    }
    static contextType = RoomContext;
    
    render() {
        
        const { isOpen } = this.state;
        const { getRoom } = this.context;
        const { photoIndex } = this.state;
        const room = getRoom(this.state.slug);
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
                        {isOpen && (
                            <Lightbox
                                mainSrc={defuldImg[photoIndex]}
                                nextSrc={defuldImg[(photoIndex + 1) % defuldImg.length]}
                                prevSrc={defuldImg[(photoIndex + defuldImg.length - 1) % defuldImg.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() => this.setState({
                                    photoIndex: (photoIndex + defuldImg.length - 1) % defuldImg.length
                                })}
                                onMoveNextRequest={() => this.setState({
                                    photoIndex: (photoIndex + 1) % defuldImg.length
                                })}
                            />
                        )}
                    </div>
                </section>
                <section className="room-section">
                    <h3>פרטים</h3>
                    <p>{description}</p>
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


                    <a rel="noopener noreferrer" target="_blank" className="book-now-btn"
                        href={
"https://minihotelpms.net/frame/reservas/getAvailability?hotelToken=a41ce7814d16061ac9a951e3bb1c534e&nAdults=1&nChilds=0&nBabies=0&language=HE&rateCode=*ALL&roomId=&from=2020-08-21&to=2020-08-22&minToDate=2020-08-22&nochesPedidas=1&bloggerId=&languageDirection=rtl"
                        }
                    >
                        הזמן עכשיו!
                        <span className="calander-icon">
                            <FaCalendarAlt/>
                        </span>
                    </a>

                </section>

                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}