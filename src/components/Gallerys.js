import React, { Component } from 'react'
import Title from './Title';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

var viewImages =[];
var hostelImages =[];

export default class Gallerys extends Component {
    state = {
        photoIndex: 0,
        isOpen_view: false,
        isOpen_hostel: false
    }
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        hostelImages = this.importAll(require.context('../images/אווירה', false, /\.(png|jpe?g|svg)$/));
        viewImages = this.importAll(require.context('../images/נוף', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        const { isOpen_hostel } = this.state;
        const { isOpen_view } = this.state;
        const { photoIndex } = this.state;
        return(
            <>

                <section className="services">
                    <Title title="תמונות מההוסטל"/> 
                    <div className="container">

                        {hostelImages.map((image, index) =>
                            <div
                                key={index} alt="pic"
                                style={{backgroundImage: `url(${image})`}}
                                onClick={() => this.setState({ isOpen_hostel: true, photoIndex: index })}
                                >
                            </div>
                        )}
                        {isOpen_hostel && (
                            <Lightbox
                                mainSrc={hostelImages[photoIndex]}
                                nextSrc={hostelImages[(photoIndex + 1) % hostelImages.length]}
                                prevSrc={hostelImages[(photoIndex + hostelImages.length - 1) % hostelImages.length]}
                                onCloseRequest={() => this.setState({ isOpen_hostel: false })}
                                onMovePrevRequest={() => this.setState({
                                    photoIndex: (photoIndex + hostelImages.length - 1) % hostelImages.length
                                })}
                                onMoveNextRequest={() => this.setState({
                                    photoIndex: (photoIndex + 1) % hostelImages.length
                                })}
                            />
                        )}

                    </div>
                </section>

                <section className="services">
                    <Title title="נופים בסביבה"/> 
                    <div className="container">
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
                    </div>
                </section>
            </>
        )
    }
}
/*
export default class Gallerys extends Component {
    state = {
        photoIndex: 0,
        isOpen_view: false,
        isOpen_hostel: false,
        hostel_images: [e,f,g,h],
        view_images: [a,b,c,d]
    }

    render() {
        const { isOpen_view } = this.state;
        const { isOpen_hostel } = this.state;
        const { photoIndex } = this.state;
        const { hostel_images } = this.state;
        const { view_images } = this.state;
        return (
            <>
                <section className="services">
                    <Title title="תמונות מההוסטל"/> 
                    <div className="container">
                        {hostel_images.map((item,index)=>{
                            return ( <div
                                        key={index} alt="pic"
                                        style={{backgroundImage: `url(${item})`}}
                                        onClick={() => this.setState({ isOpen_hostel: true, photoIndex: index })}
                                        >
                                    </div>);                       
                        })}
                        {isOpen_hostel && (
                            <Lightbox
                                            mainSrc={hostel_images[photoIndex]}
                                            nextSrc={hostel_images[(photoIndex + 1) % hostel_images.length]}
                                            prevSrc={hostel_images[(photoIndex + hostel_images.length - 1) % hostel_images.length]}
                                            onCloseRequest={() => this.setState({ isOpen_hostel: false })}
                                            onMovePrevRequest={() => this.setState({
                                                photoIndex: (photoIndex + hostel_images.length - 1) % hostel_images.length
                                            })}
                                            onMoveNextRequest={() => this.setState({
                                                photoIndex: (photoIndex + 1) % hostel_images.length
                                            })}
                            />
                        )}
                    </div>
                </section>
                <section className="services">
                    <Title title="נופים בסביבה"/> 
                    <div className="container">
                    {view_images.map((item,index)=>{
                            return ( <div
                                        key={index} alt="pic"
                                        style={{backgroundImage: `url(${item})`}}
                                        onClick={() => this.setState({ isOpen_view: true, photoIndex: index })}
                                        >
                                    </div>);                       
                        })}
                        {isOpen_view && (
                            <Lightbox
                                            mainSrc={view_images[photoIndex]}
                                            nextSrc={view_images[(photoIndex + 1) % view_images.length]}
                                            prevSrc={view_images[(photoIndex + view_images.length - 1) % view_images.length]}
                                            onCloseRequest={() => this.setState({ isOpen_view: false })}
                                            onMovePrevRequest={() => this.setState({
                                                photoIndex: (photoIndex + view_images.length - 1) % view_images.length
                                            })}
                                            onMoveNextRequest={() => this.setState({
                                                photoIndex: (photoIndex + 1) % view_images.length
                                            })}
                            />
                        )}
                    </div>
                </section>
            </>
        );
    }
}*/