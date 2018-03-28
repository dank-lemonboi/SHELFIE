import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

import '../../styles/navbar.css'

export default class ShelfNavbar extends Component {
    render() {
        console.log(this.props.shelfId)
    return (
        <div className='shelf_navbar'>
        <div className='shelf_logo'>
            <Link to={'/'}><img src={logo}/></Link>
            </div>
            <div className='shelf_link' >SHELF {this.props.id}</div>
        </div>
    )
 }
}