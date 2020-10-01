import React, { Component } from 'react'
import Title from './Title';
import {FaUtensils,FaAngellist, FaMapMarked, FaRegSmileBeam} 
from 'react-icons/fa';

export default class Servies extends Component {
    state={
        services: [
            {
                icon:<FaUtensils/>,
                title:"מטבח משותף מאובזר וביתי"
            },
            {
                icon:<FaAngellist/>,
                title:"גג עם נוף לכנרת ולהרי הגולן"
            },
            {
                icon:<FaRegSmileBeam/>,
                title:"צוות אדיר"
            },
            {
                icon:<FaMapMarked/>,
                title:"מיקום מרכזי"
            }
        ]
    }
    render() {
        return (
            <>
            <section className="empty-services">
                {/* <Title title="אז איך זה עובד?"/> */}
                <h6>אנחנו באכסניית טבריה מציעים יחידות אירוח מודרניות ונעימות, למטיילים בתקציב מוגבל. תוכלו ליהנות אצלנו מחדר פנאי עם סנוקר, משחקי לוח ופאזלים, וטרקלין טלוויזיה. אינטרנט אלחוטי זמין בחינם בכל השטח. ברים, מסעדות וחופים נמצאים כולם בסביבה הקרובה, והצוות האדיר שלנו תמיד יוכל להמליץ לכם על המסלולים הטובים ביותר לטיולים באזור!</h6>

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