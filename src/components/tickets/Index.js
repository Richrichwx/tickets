import React, { Component } from 'react';
import './Index.css';
import turk from '../../assets/turk.png'
import { connect } from 'react-redux';
import { getTickets } from '../../store/actions/tickets';


const tickets = [
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "16:20",
    "arrival_date": "12.05.18",
    "arrival_time": "22:10",
    "carrier": "TK",
    "stops": 3,
    "price": 12400,
    "currency": 'rub'
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:20",
    "arrival_date": "12.05.18",
    "arrival_time": "23:50",
    "carrier": "S7",
    "stops": 1,
    "price": 13100,
    "currency": 'usd'
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "12:10",
    "arrival_date": "12.05.18",
    "arrival_time": "18:10",
    "carrier": "SU",
    "stops": 0,
    "price": 15300,
    "currency": 'eur'
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:00",
    "arrival_date": "12.05.18",
    "arrival_time": "23:30",
    "carrier": "TK",
    "stops": 2,
    "price": 11000,
    "currency": 'usd'
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "12:10",
    "arrival_date": "12.05.18",
    "arrival_time": "20:15",
    "carrier": "BA",
    "stops": 3,
    "price": 13400,
    "currency": 'rub'
  },
];

class Tickets extends Component {

  componentDidMount() {
    this.props.getTickets(tickets);
  }

  declOfNum = (number,titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
     return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  };

  render() {
    const {tickets: {tickets}, filterTickets}=this.props;
    let afterTickets;
    if(filterTickets.length>0) {
      afterTickets = filterTickets
    }
    else {
      afterTickets = tickets
    }
    return (
      <div className='tickets'>
        { afterTickets && afterTickets.map((item,id) => (
            <div className='container' key={id}>
              <div className='logoCompany'>
                <div className='logoCompanyItems'>
                  <div className='companyText'>
                    <p className='textAirlines'>TURKISH AIRLINES</p>
                  </div>
                  <img className='imageLogo' src={turk} alt=""/>
                </div>
                <div className='button'>
                  <button className='buyButton'>
                    <p className='buyBtnText'>Купить за</p>
                    { item.price} {item.currency}
                  </button>
                </div>
              </div>
              <div className='common'>
                <div className='time'>
                  <div className='departure'>
                    { item.departure_time }
                  </div>
                  <div className='flightTransfers'>
                    <div className='containerStops'>
                      { item.stops } { this.declOfNum(item.stops, ['пересадка', 'пересадки', 'пересадок']) }
                    </div>
                    <div className='containerLine'>
                    </div>
                  </div>
                  <div className='arrival'>
                    { item.arrival_time}
                  </div>
                </div>
                <div className='cityNames'>
                  <div className='cityDeparture'>
                    { item.origin },
                    { item.origin_name }
                  </div>
                  <div className='cityArrival'>
                    { item.destination },
                    { item.destination_name }
                  </div>
                </div>
                <div className='date'>
                  <div className='dateDeparture'>
                    { item.departure_date }
                  </div>
                  <div className='dateArrival'>
                    { item.arrival_date }
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets,
  filterTickets: state.filterTickets.filterTickets
});
const mapDispatchToProps = {
  getTickets,
};

export default connect(mapStateToProps,mapDispatchToProps)(Tickets);