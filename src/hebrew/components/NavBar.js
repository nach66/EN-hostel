import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaWindowClose, FaAlignLeft, FaCalendarAlt} from 'react-icons/fa'
import logo from '../images/icons/logo.jpg'
import l from '../images/icons/bet.png'

export default class NavBar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onClicklogo = () => {
        this.setState({
            isOpen: false
        });
    }
    
    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="nav-center" >
                        <div className="nav-header">
                            <Link to="/" >                        
                                <img src={logo} onClick={this.onClicklogo} className="nav-logo" alt="logo"/>
                            </Link>
                            <button type="button" onClick={this.handleToggle} className="nav-btn">
                                {this.state.isOpen? 
                                    <FaWindowClose className="nav-icon"/> :
                                    <FaAlignLeft className="nav-icon"/>
                                }
                                </button>
                        </div>

                        <ul onClick={this.handleToggle}
                            className={this.state.isOpen? "nav-links" : "nav-links hide-nav" }>
                            <li>
                                <Link to="/he/about"  className="nav-links" >מי אנחנו</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/he/rooms" className="nav-links">החדרים שלנו</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li> 
                            <Link to="/he/activities" className="nav-links">פעילויות באזור</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/he/location" className="nav-links">מצאו אותנו</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/he/contact" className="nav-links">צור קשר</Link>
                            </li>
                            <br/>
                            <li>
                            <Link to="/he/bookhere" 
                                className="nav-links"
                                style={{width: '140px',  
                                    color: 'var(--mainWhite)',
                                    background : 'var(--mainGreen)'}}
                                >הזמן עכשיו!
                                <span className="calander-icon" >
                                    <FaCalendarAlt/>
                                </span>
                            </Link>
                            </li>
                        </ul>
                    </div>     
                </nav>
            </>
        )
    }
}