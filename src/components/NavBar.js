import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaWindowClose, FaAlignLeft, FaCalendarAlt} from 'react-icons/fa'
import {animateScroll as scroll } from 'react-scroll'
import logo from '../images/icons/logo.jpg'
import l from '../images/icons/bet.png'
import en from '../images/en.png'
import he from '../images/he.jpg'

export default class NavBar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    scrollToTop () {
        scroll.scrollToTop(0);
    }
    onClickMenuItem = () => {
        scroll.scrollTo(500);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="nav-center" style={{direction:'ltr'}}>
                        <div className="nav-header">
                            <Link to="/" >                        
                                <img src={logo} onClick={this.scrollToTop} className="nav-logo" alt="logo"/>
                            </Link>
                            <button type="button" onClick={this.handleToggle} className="nav-btn">
                                {this.state.isOpen? 
                                    <FaWindowClose className="nav-icon"/> :
                                    <FaAlignLeft className="nav-icon"/>
                                }
                                </button>
                        </div>

                        <ul onClick={this.onClickMenuItem}
                            className={this.state.isOpen? "nav-links" : "nav-links hide-nav" }>
                            <li>
                                <Link to="/"  className="nav-links" >Abuot us</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/rooms" className="nav-links">Our rooms</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li> 
                            <Link to="/activities" className="nav-links">Activity around</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/location" className="nav-links">Find  <br/> us</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/contact" className="nav-links">Lets talk</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                            <Link to="/bookhere" 
                                className="nav-links"
                                style={{width: '170px',  
                                    marginLeft: '15PX',                    
                                    color: 'var(--mainWhite)',
                                    background : 'var(--mainGreen)'}}
                                >
                                    <div style={{
                                    direction: 'ltr',
                                    fontSize: '1.1rem',  
                                    paddingTop:'8px',
                                    }}>
                                        Book now!
                                    </div>
                                <span className="calander-icon" >
                                    <FaCalendarAlt/>
                                </span>
                            </Link>
                            </li>
                            <li>
                            </li>
                        </ul>

                    </div>     
                </nav>

                <div className="languegus">
                    <a rel="noopener noreferrer" 
                        //href='https://tiberiashostel.netlify.app/'
                        >
                        <img src={he} alt="flagi"/>
                    </a>
                    <br/>
                    <a rel="noopener noreferrer"
                        href='https://tiberiashostel-en.netlify.app/'>                        
                        <img src={en} alt="flage"/>
                    </a>
                </div>
            </>
        )
    }
}