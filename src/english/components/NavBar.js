import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaWindowClose, FaCalendarAlt, FaAlignJustify} from 'react-icons/fa'
import logo from '../images/icons/logoen.jpg'
import l from '../images/icons/bet.png'

export default class NavBar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
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
                    <div className="nav-center" style={{direction:'ltr'}}>
                        <div className="nav-header">
                            <Link to="/en/" >                        
                                <img src={logo} onClick={this.onClicklogo} className="nav-logo" alt="logo"/>
                            </Link>
                            <button type="button" onClick={this.handleToggle} className="nav-btn">
                                {this.state.isOpen? 
                                    <FaWindowClose className="nav-icon"/> :
                                    <FaAlignJustify className="nav-icon"/>
                                }
                                </button>
                        </div>

                        <ul onClick={this.handleToggle}
                            className={this.state.isOpen? "nav-links" : "nav-links hide-nav" }>
                            <li>
                                <Link to="/en/about"  className="nav-links" >Abuot us</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/en/rooms" className="nav-links">Our rooms</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li> 
                            <Link to="/en/activities" className="nav-links">Activity around</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/en/location" className="nav-links">on the map</Link>
                            </li>
                            <img src={l} className="anchor" alt="logo"/>
                            <li>
                                <Link to="/en/contact" className="nav-links">Lets talk</Link>
                            </li>
                            <br/>
                            <li>
                                <Link to="/en/bookhere" 
                                    className="nav-links"
                                    style={{width: '140px',  
                                        color: 'var(--mainWhite)',
                                        background : 'var(--mainGreen)'}}
                                    >book now!
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