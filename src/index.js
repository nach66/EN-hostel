import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom"; 
import * as serviceWorker from "./serviceWorker";
import {ActivityProvider} from "./contextActivities";
import {RoomProvider} from "./contextRooms";
import ScrollToTop from "./ScrollToTop";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <RoomProvider>
    <ActivityProvider>
        <Router>
          <ParallaxProvider>
            <ScrollToTop/>
            <App/>
          </ParallaxProvider>
        </Router>
    </ActivityProvider>
  </RoomProvider>
,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

