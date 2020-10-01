import React, { Component } from 'react'
import Title from './Title';
import {FaUtensils,FaAngellist, FaMapMarked, FaRegSmileBeam} 
from 'react-icons/fa';

export default class Servies extends Component {
    state={
        services: [
            {
                icon:<FaUtensils/>,
                title:"Equipped and homely shared kitchen"
            },
            {
                icon:<FaRegSmileBeam/>,
                title:"Awesome team"
            },
            {
                icon:<FaMapMarked/>,
                title:"Central location"
            },
            {
                icon:<FaAngellist/>,
                title:"Rooftop with stunning views"
            },
        ]
    }
    render() {
        return (
            <>
            <section className="empty-services">
                {/* <Title title="So, how does it work?"/> */}
                <h6 className="lang">We at the Tiberias Hostel offer modern and pleasant accommodation units, for travelers on a limited budget. With us you can enjoy a hang-out room with pool table, board games and puzzles, a TV lounge, and free Wi-Fi. Bars, restaurants and beaches are all nearby, and our great staff will always be able to recommend the best hiking trails in the area!</h6>
                <div className="services-center">
                    {this.state.services.map(
                        (item, index) => {return (
                            <article key={index}>
                                <span className="icon-services">{item.icon}</span>
                                <h6 className="h6-services">{item.title}</h6>
                            </article>
                        )}
                    )}
                </div>
            </section>
            </>
        );
    }
}
