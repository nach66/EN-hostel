import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import { useTransition, animated, config } from 'react-spring'
import a from '../images/כותרת/n1.jpg'
import b from '../images/כותרת/n2.jpg'
import c from '../images/כותרת/n3.jpg'
import d from '../images/כותרת/n5.jpg'

const slides = [
    { id: 0, url: a },
    { id: 1, url: b },
    { id: 2, url: c },
    { id: 3, url: d },
  ]
function Images (props) {
    const [index, set] = useState(0);

    useEffect(() => {
        setInterval(() => set(state => (state + 1) % 4), 3000);
    }, []);

    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })

    return (
        <>
            {transitions.map(({ item, props, key }) => (
            <animated.div
                key={key}
                class="bg"
                style={{ ...props, backgroundImage: `url(${item.url}` }}
            />
            ))}
            <div className="switch">
                <Hero>
                        <Banner title={props.title}
                            subtitle={props.subtitle}>
                            <Link to={props.link} className="btn-primary2">
                                {props.link_text}
                            </Link>
                        </Banner>
                    </Hero>
            </div>
        </>
    );
}

export default Images;

/* export default class Images extends Component {
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [],
            trtransitions: 0
        };
    }
    importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        this.setState ({
            images: this.importAll(require.context('../images/כותרת', false, /\.(png|jpe?g|svg)$/))
        });
    }
    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
        } else {
        this.setState({
            currentImage: 0
        });
        }
        return this.currentImage;
    }
    componentDidMount() {
        setInterval(this.switchImage, 2000);
    

    transitions = useTransition(this.state.images[this.state.currentImage], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
        });
    }

    render() {
        return (
            <div className="switch">

            {transitions.map(({ props, key }) => (
                <animated.div
                    key={key}
                    class="bg"
                    style={{ ...props, backgroundRepeat: 'no-repeat', 
                            backgroundImage: `url(${this.state.images[this.state.currentImage]})` }}
                />
            ))}

                    <Hero>
                        <Banner title={this.props.title}
                            subtitle={this.props.subtitle}>
                            <Link to={this.props.link} className="btn-primary2">
                                {this.props.link_text}
                            </Link>
                        </Banner>
                    </Hero>
                </div>
        );
    }
} */


/* <CrossfadeImage
                    src={this.state.images[this.state.currentImage]}
                    timingFunction={"ease-out"}
                /> 
                    
                    <div style={{ backgroundRepeat: 'no-repeat', 
                    backgroundImage: `url(${this.state.images[this.state.currentImage]})`}}>
                    <Hero>...</Hero>
    </div> */