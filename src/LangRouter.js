import React, { Component } from 'react'
import { Redirect,Route,Switch } from 'react-router-dom'
import NoFound from './english/pages/Error'
import "./App.css";
import App from "./App";
import AppE from "./AppEnglish";
import {ActivityProvider as ActivityE} from "./english/contextActivities";
import {RoomProvider as RoomE} from "./english/contextRooms";
import {ActivityProvider as ActivityH} from "./hebrew/contextActivities";
import {RoomProvider as RoomH} from "./hebrew/contextRooms";
import ScrollToTop from "./ScrollToTop";

export default class LangRouter extends Component {
    constructor(props) {
        super(props)
        let locale = window.localStorage.getItem('locale')
        if (locale === null) {
                window.localStorage.setItem('locale', 'en')
                locale = 'he'
        }
        this.state = {
                locale: locale
        }
    }        
    setLocale = (newLocale) => {
        console.log('newLocale = ', newLocale);
        window.localStorage.setItem('locale', newLocale)
        this.setState({ locale: newLocale })
    }

    render() {
        const { locale } = this.state
        return (
            <Switch>
                <Route path="/" exact render={propRouter => {
                    return <Redirect to={locale + "/"} />
                }} />
                <Route path="/en/*" render={
                    propsRouter => 
                    <RoomE>
                        <ActivityE>
                            <ScrollToTop/>
                            <AppE 
                                {...propsRouter}
                                locale={locale} 
                                setLocale={this.setLocale} 
                            />
                        </ActivityE>
                    </RoomE>
                }/>
                <Route path="/he/*" render={
                    propsRouter =>
                    <RoomH>
                        <ActivityH>
                            <ScrollToTop/>
                            <App
                                {...propsRouter}
                                locale={locale} 
                                setLocale={this.setLocale}
                            />
                        </ActivityH>
                    </RoomH>
                } />
                <Route path="*" render={
                    propsRouter =>
                    <NoFound
                        {...propsRouter}
                        locale={locale} 
                        setLocale={this.setLocale}
                    />
                } />
            </Switch>
        )
    }
}