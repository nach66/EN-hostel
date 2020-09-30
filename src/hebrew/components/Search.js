import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'
import { format } from "date-fns";

export default class Search extends Component {

    state = {
        startDate: new Date(),
        toDate: addDays(new Date(), 1),
        adults: '',
        childs: ''
    };
    handleChangeFrom = date => {
        this.setState({
            startDate: date,
            toDate: addDays(date, 1)
        });
    };
    handleChangeTo = date => {
        this.setState({
            toDate: date
        });
    };
    handleChangeAdults = (event) => {
        this.setState({
            adults: event.target.value
        });
    };
    handleChangeChilds = (event) => {
        this.setState({
            childs: event.target.value
        });
    };
    handleSubmit = () => {
        let formattedFrom = format(this.state.startDate, "yyyy-MM-dd"); 
        let formattedTo = format(this.state.toDate, "yyyy-MM-dd"); 

        window.open(
            `https://minihotelpms.net/frame/reservas/getAvailability?hotelToken=a41ce7814d16061ac9a951e3bb1c534e&
            nAdults=${this.state.adults}&nChilds=${this.state.childs}&nBabies=0&language=HE&rateCode=*ALL&roomId=&
            from=${formattedFrom}&to=${formattedTo}&minToDate=${formattedTo}
            &nochesPedidas=1&bloggerId=&languageDirection=rtl`
            , '_blank');
    }

    componentDidMount() {
        const datePickers = document.getElementsByClassName("react-datepicker__input-container");
        Array.from(datePickers).forEach((el => el.childNodes[0].setAttribute("readOnly", true)))
    };

    render() {
        return (
            <>
                <div className="comp">
                <div className="best_price"/>
                    <div className="book-now-comp">
                        <div style={{position: 'relative', display: 'inline-block'}}>
                                <DatePicker
                                    minDate={this.state.startDate}
                                    selected={this.state.startDate}
                                    onChange={this.handleChangeFrom}
                                    dateFormat="yyyy-MM-dd"
                                    name='from'
                                    popperModifiers={{
                                        offset: {
                                            enabled: true,
                                            offset: "-100px, 2px"
                                        }
                                    }}
                                />
                            </div>
                            <div style={{position: 'relative', display: 'inline-block'}}>
                                <DatePicker
                                    selected={this.state.toDate}
                                    onChange={this.handleChangeTo}
                                    dateFormat="yyyy-MM-dd"
                                    name='to' 
                                    popperModifiers={{
                                        offset: {
                                            enabled: true,
                                            offset: "10px, 2px"
                                        }
                                    }}
                                />
                            </div>
                            <select 
                                defaultValue=""                            
                                className="ppl" 
                                onChange={this.handleChangeAdults} 
                                name='nAdults'>
                                <option disabled={true} value="">מבוגרים:</option>
                                <option value='1'>1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option><option value='10' >10</option></select>
                            <select 
                                defaultValue=""
                                className="ppl" 
                                onChange={this.handleChangeChilds} 
                                name='nChilds'>
                            <option disabled={true} value="">ילדים:</option>
                            <option value='0'>0</option><option value='1' >1</option><option value='2' >2</option><option value='3' >3</option><option value='4' >4</option><option value='5' >5</option><option value='6' >6</option><option value='7' >7</option><option value='8' >8</option><option value='9' >9</option></select>
                        <input 
                            className="book"
                            type='submit'
                            onClick={this.handleSubmit}
                            value='הזמינו עכשיו'/>
                    </div>
                </div>
            </>
        );
    }
}