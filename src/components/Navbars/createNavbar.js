import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

import '../../styles/navbar.css'

export default class CreateNavbar extends Component {
    
    render() {
    return (
        <div className='shelf_navbar'>
        <div className='shelf_logo'>
            <Link to={'/'}><img src={logo}/></Link>
            </div>
            <Link to={`/api/shelf/${this.props.id[0]}`} style={{textDecoration: 'none'}}><div className='shelf_link' >SHELF {this.props.id[0]}</div></Link>
            <div className='bin_id'>Add to Bin {this.props.id[1]}</div>
        </div>
    )
 }
}