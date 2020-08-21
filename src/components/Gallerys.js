import React, { Component } from 'react'
import Title from './Title';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import c from '../images/def.jpg';

var tempImages = [];
var viewImages =[];
var hostelImages =[];

export default class Gallerys extends Component {
    state = {
        photoIndex: 0,
        isOpen_view: false,
        isOpen_hostel: false,
        images: []
    }
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        tempImages = this.importAll(require.context('../images/אווירה', false, /\.(png|jpe?g|svg)$/));
        tempImages.map((image,index) => {
            let temp = 
                {
                    original: tempImages[index],
                    thumbnail: tempImages[index]
                };
                hostelImages.push(temp);                
        });

        tempImages = this.importAll(require.context('../images/נוף', false, /\.(png|jpe?g|svg)$/));
        tempImages.map((image,index) => {
            let temp = 
                {
                    original: tempImages[index],
                    thumbnail: tempImages[index]
                };
                viewImages.push(temp);                
        });
    }

    render(){
        const { isOpen_hostel } = this.state;
        const { isOpen_view } = this.state;
        const { photoIndex } = this.state;
        return(
            <>
                <section className="gallery-services">
                    <Title title="תמונות מההוסטל"/> 
                    <ImageGallery 
                    isRTL={true}
                    showBullets={true}
                    showPlayButton={false}
                    disableThumbnailScroll={false}
                    items={hostelImages} />
                </section>
                <section className="gallery-services">
                    <Title title="נופים בסביבה"/> 
                    <ImageGallery 
                    isRTL={true}
                    showBullets={true}
                    showPlayButton={false}
                    disableThumbnailScroll={false}
                    items={viewImages} />
                </section>
            </>
        )
    }
}

/* <div className="container">
{viewImages.map((image, index) =>
    <div
        key={index} alt="pic"
        style={{backgroundImage: `url(${image})`}}
        onClick={() => this.setState({ isOpen_view: true, photoIndex: index })}
        >
    </div>
)}
{isOpen_view && (
    <Lightbox
                    mainSrc={viewImages[photoIndex]}
                    nextSrc={viewImages[(photoIndex + 1) % viewImages.length]}
                    prevSrc={viewImages[(photoIndex + viewImages.length - 1) % viewImages.length]}
                    onCloseRequest={() => this.setState({ isOpen_view: false })}
                    onMovePrevRequest={() => this.setState({
                        photoIndex: (photoIndex + viewImages.length - 1) % viewImages.length
                    })}
                    onMoveNextRequest={() => this.setState({
                        photoIndex: (photoIndex + 1) % viewImages.length
                    })}
    />
)}
</div> */