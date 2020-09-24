import React, { Component } from 'react'
import Title from './Title';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

var tempImages = [];
var viewImages =[];
var hostelImages =[];

export default class Gallerys extends Component {
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
                return null;               
        });

        tempImages = this.importAll(require.context('../images/נוף', false, /\.(png|jpe?g|svg)$/));
        tempImages.map((image,index) => {
            let temp = 
                {
                    original: tempImages[index],
                    thumbnail: tempImages[index]
                };
                viewImages.push(temp);     
                return null;                          
        });
    }

    render(){
        return(
            <>
                <div className="gallery-background">                
                    <section className="gallery-services">
                        <Title title="תמונות מההוסטל"/> 
                        <ImageGallery 
                        showNav={false}
                        showFullscreenButton={false}
                        isRTL={true}
                        showPlayButton={false}
                        disableThumbnailScroll={false}
                        items={hostelImages} />
                    </section>
                </div>
                <div className="gallery-background">                
                    <section className="gallery-services">
                        <Title title="נופים בסביבה"/> 
                        <ImageGallery 
                        isRTL={true}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        disableThumbnailScroll={false}                    
                        items={viewImages} />
                    </section>
                </div>
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