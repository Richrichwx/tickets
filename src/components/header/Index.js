import React, { Component } from 'react';
import './Index.css';
import logo from '../../assets/logo.png'

class Tickets extends Component{
  render() {
    return (
      <div className='logo'>
        <img className='logoHeader' src={logo}/>
      </div>
    )
  }
}

export default Tickets;