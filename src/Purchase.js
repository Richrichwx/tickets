import React, { Component } from 'react';
import './Purchase.css';
import Sidebar from './components/sidebar/Index.js';
import Header from './components/header/Index.js';
import Tickets from './components/tickets/Index.js';

class Purchase extends Component {

  render() {
    return (
      <div className="purchase">
        <div className='headerPurchase'>
          <Header/>
        </div>
        <div className='content'>
          <Sidebar/>
          <Tickets/>
        </div>
      </div>
    );
  }
}

export default Purchase;
