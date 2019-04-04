import React, { Component } from 'react';
import './Index.css';
import { connect } from 'react-redux';
import { findTickets } from '../../store/actions/tickets/filterTickets';
import { getCurrency } from '../../store/actions/currency/currency';
import { findCurrency} from '../../store/actions/currency/filterCurrency';

const currency = [
    {
      'rub': 'RUB',
    },
    {
      'usd': 'USD',
    },
    {
      'eur': 'EUR',
    }
    ];

class Sidebar extends Component{

  componentDidMount() {
    this.props.getCurrency(currency);
  }

  state = {
    isGoing: false,
    isGoing1: false,
    isGoing2: false,
    isGoing3: false,
    isGoing4: false,
    idX: [],
    idCurrency: []
  };


  handleInputChange = (id,e) => {
    let newIdX = this.state.idX;
    if(newIdX.indexOf(id) < 0) {
      newIdX = [...newIdX,id];
    } else {
      newIdX.splice(newIdX.indexOf(id),1);
    }
    this.setState({
      idX: newIdX,
      [e]: !this.state[e]
    }, () => {
      this.props.findTickets(this.state[e],id,this.props.tickets.tickets,newIdX);
    });
  };

  chooseCurrency = (idC) => {
    let newIdCurrency = this.state.idCurrency;
    if(newIdCurrency.indexOf(idC) < 0) {
      newIdCurrency = [...newIdCurrency,idC];
    } else {
      newIdCurrency.splice(newIdCurrency.indexOf(idC),1);
    }
  };


  render() {
    const {isGoing,isGoing1,isGoing2,isGoing3,isGoing4,} = this.state;
    const {currency: {currency}, filterCurrency}=this.props;
    return (
       <div className='sidebar'>
        <div className='surrency'>
          <p className='surrencyText'>ВАЛЮТА</p>
          <div className="currencyList">
            {currency && currency.map((item,id) => (
               <div className='listItems' key={id}>
                <div className='currencyListItems'
                     onClick={()=>this.chooseCurrency('rub')}>{item.rub}
                </div>
                 <div className='currencyListItems'
                      onClick={()=>this.chooseCurrency( 'usd')}>{item.usd}
                 </div>
                 <div className='currencyListItems'
                      onClick={()=>this.chooseCurrency('eur')}>{item.eur}
                 </div>
              </div>
            ))}
          </div>
        </div>
         <div className='transplants'>
           <p className='transplantsText'>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
           <div className='transplantsList'>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing}
                      onChange={() => this.handleInputChange('all','isGoing')}/>
               <p className='text'>Все</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing1}
                      onChange={() =>this.handleInputChange(0,'isGoing1')}/>
               <p className='text'>Без пересадок</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing2}
                      onChange={() =>this.handleInputChange(1,'isGoing2')}/>
               <p className='text'>1 пересадка</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing3}
                      onChange={() =>this.handleInputChange(2,'isGoing3')}/>
               <p className='text'>2 пересадки</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing4}
                      onChange={() =>this.handleInputChange(3,'isGoing4')}/>
               <p className='text'>3 пересадки</p>
             </div>
           </div>
         </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets,
  currency: state.currency,
  filterCurrency: state.filterCurrency.filterCurrency,
});

const mapDispatchToProps = {
  findTickets,
  getCurrency,
  findCurrency
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);