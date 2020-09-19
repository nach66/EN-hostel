import React from 'react'
import c from '../images/odot.jpg'
import Title from '../components/Title';

export default function About() {
    return (
        <>
            <section className="empty-services">
                <Title title="ABOUT US"/> 
                <div className="about">
                    <article className="pic">
                        <img src={c} alt="היי"/>  
                    </article>
                    <article>
                        <h5>We are two partners, one an experienced globetrotter the other a native to the region. Realizing there was a missing link to traveling the North of Israel we decided to set up Tiberias Hostel so you could have a Home-Base from which to set out on day trips and return to comfort and safety. Our staff will be happy to help you plan your trip and find your way to the next destination.</h5> 
                        <h5>We know what travelers need, and we know the best updated places around here and how to get there. </h5>
                    </article>
                </div>
            </section>
        </>
    )
}
