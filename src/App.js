import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./hebrew/components/NavBar";
import Activities from "./hebrew/pages/Activities";
import PrivateRooms from "./hebrew/pages/PrivateRooms";
import PublicRooms from "./hebrew/pages/PublicRooms";
import SingleRoom from "./hebrew/pages/SingleRoom";
import Location from "./hebrew/pages/Location";
import Aboutus from "./hebrew/pages/Aboutus";
import Contact from "./hebrew/pages/Contact";
import Booking from "./hebrew/pages/Booking";
import Rooms from "./hebrew/pages/Rooms";
import Error from "./hebrew/pages/Error";
import Home from "./hebrew/pages/Home";
import "./App.css";

function App(props) {
    let { locale } = props
    let urlLocale = props.location.pathname.substring(1, 3)
    if ( locale !== urlLocale ) {
        props.setLocale(urlLocale)
        locale = urlLocale
    }
    
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path={"/" + locale + "/"} exact render={propRouter => 
                    <Home {...propRouter} {...props} />
                } />
                <Route path={"/" + locale + "/about"} exact render={propRouter => 
                    <Aboutus {...propRouter} {...props} />
                } />                
                <Route path={"/" + locale + "/rooms"} exact render={propRouter => 
                    <Rooms {...propRouter} {...props} />
                } />                
                <Route path={"/" + locale + "/public"} exact render={propRouter => 
                    <PublicRooms {...propRouter} {...props} />
                } />                
                <Route path={"/" + locale + "/private"} exact render={propRouter => 
                    <PrivateRooms {...propRouter} {...props} />
                } />
                <Route path={"/" + locale + "/Activities"} exact render={propRouter => 
                    <Activities {...propRouter} {...props} />
                } />                
                <Route path={"/" + locale + "/location"} exact render={propRouter => 
                    <Location {...propRouter} {...props} />
                } />
                <Route path={"/" + locale + "/contact"} exact render={propRouter => 
                    <Contact {...propRouter} {...props} />
                } />    
                <Route path={"/" + locale + "/bookhere"} exact render={propRouter => 
                    <Booking {...propRouter} {...props} />
                } />   
                <Route path={"/" + locale + "/rooms/:slug"} exact render={propRouter => 
                    <SingleRoom {...propRouter} {...props} />
                } />
                <Route exact render={propRouter => 
                    <Error {...propRouter} {...props} />
                } />
                
                <Route exact path="/jerusalem" component={() => { 
                    window.location.href = 
                    'https://www.google.co.il/maps/dir/Jerusalem/Tiberias+Hostel,+%D7%9B%D7%99%D7%9B%D7%A8+%D7%A8%D7%91%D7%99%D7%9F,+%D7%98%D7%91%D7%A8%D7%99%D7%94%E2%80%AD%E2%80%AD/@32.2826278,34.6966659,9z/data=!4m14!4m13!1m5!1m1!1s0x1502d7d634c1fc4b:0xd96f623e456ee1cb!2m2!1d35.21371!2d31.768319!1m5!1m1!1s0x151c3e48ddd195df:0x2bf279e8d24c26b4!2m2!1d35.5394368!2d32.7887133!3e0?hl=en'            
                    return null;
                }} />
                <Route exact path="/haifa" component={() => { 
                    window.location.href = 
                    'https://www.google.co.il/maps/dir/Haifa/Tiberias+Hostel,+%D7%9B%D7%99%D7%9B%D7%A8+%D7%A8%D7%91%D7%99%D7%9F,+%D7%98%D7%91%D7%A8%D7%99%D7%94%E2%80%AD%E2%80%AD/@32.7404977,34.9846981,10z/data=!4m14!4m13!1m5!1m1!1s0x151dba4c750de845:0xc35d23982a81529a!2m2!1d34.989571!2d32.7940463!1m5!1m1!1s0x151c3e48ddd195df:0x2bf279e8d24c26b4!2m2!1d35.5394368!2d32.7887133!3e0?hl=en'
                    return null;
                }} />
                <Route exact path="/tlv" component={() => { 
                    window.location.href = 
                    'https://www.google.co.il/maps/dir/Tel+Aviv-Yafo/Tiberias+Hostel,+%D7%9B%D7%99%D7%9B%D7%A8+%D7%A8%D7%91%D7%99%D7%9F,+%D7%98%D7%91%D7%A8%D7%99%D7%94%E2%80%AD%E2%80%AD%E2%80%AD%E2%80%AD/@32.348201,34.5108512,9z/data=!4m19!4m18!1m10!1m1!1s0x151d4ca6193b7c1f:0xc1fb72a2c0963f90!2m2!1d34.7817676!2d32.0852999!3m4!1m2!1d34.855169!2d32.2744432!3s0x151d409ba6998421:0xb649027bc09c8fb3!1m5!1m1!1s0x151c3e48ddd195df:0x2bf279e8d24c26b4!2m2!1d35.5394444!2d32.7886111!3e0?hl=en'; 
                    return null;
                }} />
                <Route exact path="/nazeret" component={() => { 
                    window.location = 
                    'https://www.google.co.il/maps/dir/Nazareth/Tiberias+Hostel,+%D7%9B%D7%99%D7%9B%D7%A8+%D7%A8%D7%91%D7%99%D7%9F,+%D7%98%D7%91%D7%A8%D7%99%D7%94%E2%80%AD/@32.7075631,35.2468783,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151c4e7cf16c0fff:0xd2385b30c1275dd6!2m2!1d35.303546!2d32.699635!1m5!1m1!1s0x151c3e48ddd195df:0x2bf279e8d24c26b4!2m2!1d35.5394368!2d32.7887133!3e0?hl=en&shorturl=1'
                    return null;
                }} />

            </Switch>
        </>
    );
}

export default App;
