import React, { Component } from 'react'
import en from './images/en.png'
import he from './images/he.png'

export default class LangButtons extends Component {

        setLocale = (newLocale) => {
        let url = '/' + newLocale + this.props.location.pathname.substring(3)
        this.props.history.push(url)
        this.props.setLocale(newLocale)
        }
    
        render() {
            return (
                <>
                    <div className="languegus">
                        <div rel="noopener noreferrer" 
                            onClick={() => this.setLocale('he')}
                            >
                            <img src={he} alt="flagi"/>
                        </div>
                        <br/>
                        <div rel="noopener noreferrer"
                            onClick={() => this.setLocale('en')}
                            >                        
                            <img src={en} alt="flage"/>
                        </div>
                    </div>
                </>
            )
        }
    }