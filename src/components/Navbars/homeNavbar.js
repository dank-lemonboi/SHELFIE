import React, { Component } from 'react';
import logo from '../../Assets/logo.png'

import '../../styles/navbar.css'

export default class HomeNavbar extends Component {
    render() {
    return (
        <div className='home_navbar'>
        <div className='logo'>
            <img src={logo}/>
            </div>
            <h1>SHELFIE</h1>
        </div>
    )
 }
}