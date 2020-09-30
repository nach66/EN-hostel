import React from 'react'
import Images from '../components/Images'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Search from '../components/Search'
import LangButtons from '../LangButtons'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default class Home extends React.Component {

    state = {
        open: true,
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render () {
        const open = this.state.open;
        return (
            <>
                <LangButtons {...this.props} />
                <Modal open={open} center
                        onClose={this.onCloseModal}
                        classNames={{
                            overlay: 'customOverlay', 
                            modal: 'customModal',
                        }}
                        styles={{
                            overlay: {
                                textAlign: 'left'
                            },
                            modal: {
                                animation: `${
                                open ? 'customEnterAnimation' : 'customLeaveAnimation'
                            } 500ms`,
                            },
                        }}
                >
                    <br/>
                    <br/>
                        <p>
                            According the Ministry of Health guidelines we will be closed 😢
                            strating Friday September 18th until October 11th. 
                            But... 😏 
                            if you are looking for a friendly place to spend the lockdown, 
                            we are renting private rooms for short terms, 14 days and more.
                            Contact us for more information
                        </p>
                </Modal>
                
                <Images title="Tiberias hostel" 
                    subtitle="YOUR HOME BASE IN NORTH ISRAEL"
                    link="/en/rooms"
                    link_text="our rooms"
                />
                <div className="sbest_price"
                    style={{
                        top: '310px',
                        left: '330px'
                }}/>
                <Search/>
                <div className="sep"/>
                <ContactForm/>
                <Footer/>
            </>
        );
    }
}