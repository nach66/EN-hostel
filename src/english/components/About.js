import React from 'react'
import c from '../images/odot.jpg'
import Title from '../components/Title';

export default function About() {
    return (
        <>
            <section className="empty-services">
                <Title title="ABOUT US"/> 
                <div className="about lang">
                    <article className="pic">
                        <img 
                        style={{
                            padding: '10px',
                            height: '330px',
                            width: '340px'
                        }}
                        src={c} alt="היי"/>  
                    </article>
                    <article style={{paddingTop: '0.6rem'}} >
                        <h5 
                            className="lang"
                            style={{textAlign: 'left'}}
                        >Tiberias Hostel was established in 2015.</h5>
                        <h5 
                            className="lang"
                            style={{textAlign: 'left'}}
                        >Our location is convenient and central: 3 minutes walk from Tiberias Central Station, 3 minutes walk from the shores of the Sea of Galilee, and 30 minutes drive from a variety of attractions. There is parking available, restaurants, markets and shops.
                        </h5>
                        <h5 
                            className="lang"
                            style={{textAlign: 'left'}}
                        >We are suitable for young families, photographers, windsurfing lovers, cyclists, and anyone who wants to refresh in cool spring water with a breathtaking view under the shade of a large and old eucalyptus.
                        </h5>
                        <h5 
                            className="lang"
                            style={{textAlign: 'left'}}
                        >The hostel staff wants you to finish your holiday with us with a huge smile, so we will make sure to provide the perfect setting for a perfect holiday! Comfortable bed, tea or coffee in the morning, fully equipped kitchen, panoramic view of the Sea of Galilee. And you - you will take care of reserving your room for the next vacation in the Sea of Galilee.
                        </h5>
                    </article>
                </div>
            </section>
        </>
    )
}
