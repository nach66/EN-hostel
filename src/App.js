import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRooms from "./pages/PrivateRooms";
import PublicRooms from "./pages/PublicRooms";
import SingleRoom from "./pages/SingleRoom";
import Location from "./pages/Location";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import "./App.css";

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={Aboutus}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/public" component={PublicRooms}/>
                <Route exact path="/private" component={PrivateRooms}/>
                <Route exact path="/Activities" component={Activities}/>
                <Route exact path="/location" component={Location}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/bookhere" component={Booking}/>
                <Route exact path="/rooms/:slug" component={SingleRoom}/>
                
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

                <Route component={Error}/>
            </Switch>
        </>
    );
}

export default App;
