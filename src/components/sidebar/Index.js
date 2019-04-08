import React, { Component } from 'react';
import './Index.css';
import { connect } from 'react-redux';
import { findTickets } from '../../store/actions/tickets/filterTickets';


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

  state = {
    isGoingAll: false,
    isGoingZero: false,
    isGoingOne: false,
    isGoingTwo: false,
    isGoingThree: false,
    idX: [],
    isActiveCurrency: []
  };

  handleInputChange = (id,e,index) => {
    if(id!==null) {
      let newIdX = this.state.idX;
      let newIsActiveCurrency = this.state.isActiveCurrency;
      if(newIdX.indexOf(id) < 0) {
        newIdX = [...newIdX,id];
      }
      else {
        newIdX.splice(newIdX.indexOf(id),1);
      }
      let currencyName = [];
      if(newIsActiveCurrency.indexOf(index) < 0) {
        newIsActiveCurrency=[...newIsActiveCurrency,index]
        currencyName = [...currencyName,id]
        console.log(currencyName)
      }
      else {
        newIsActiveCurrency.splice(newIsActiveCurrency.indexOf(index),1)
      }
      this.setState({
        idX: newIdX,
        isActiveCurrency: newIsActiveCurrency,
        [e]: !this.state[e]
      }, () => {
        this.props.findTickets(this.state[e],id,this.props.tickets.tickets,newIdX,currencyName);
      });
    }
  };

  render() {
    const {isGoing,isGoing1,isGoing2,isGoing3,isGoing4,} = this.state;
    return (
       <div className='sidebar'>
        <div className='surrency'>
          <p className='surrencyText'>ВАЛЮТА</p>
          <div className="currencyList">
            {currency.map((item,id) => (
               <div className='listItems' key={id}>
                <div className='currencyListItems'
                   onClick={() => this.handleInputChange(null,null, 'rub')}>{item.rub}
                </div>
                 <div className='currencyListItems'
                      onClick={()=> this.handleInputChange( 'usd',null, 'usd')}>{item.usd}
                 </div>
                 <div className='currencyListItems'
                      onClick={()=> this.handleInputChange('eur',null, 'eur')}>{item.eur}
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
                      onChange={() => this.handleInputChange('all','isGoingAll')}/>
               <p className='text'>Все</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing1}
                      onChange={() =>this.handleInputChange(0,'isGoingZero')}/>
               <p className='text'>Без пересадок</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing2}
                      onChange={() =>this.handleInputChange(1,'isGoingOne')}/>
               <p className='text'>1 пересадка</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing3}
                      onChange={() =>this.handleInputChange(2,'isGoingTwo')}/>
               <p className='text'>2 пересадки</p>
             </div>
             <div className='transplantsItems'>
               <input type="checkbox"
                      checked={isGoing4}
                      onChange={() =>this.handleInputChange(3,'isGoingThree')}/>
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
});

const mapDispatchToProps = {
  findTickets,
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);