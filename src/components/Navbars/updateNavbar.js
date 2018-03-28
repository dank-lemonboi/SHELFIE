import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

import '../../styles/navbar.css'

export default class UpdateNavbar extends Component {
    
    render() {
    return (
        <div className='shelf_navbar'>
        <div className='shelf_logo'>
            <Link to={'/'}><img src={logo}/></Link>
            </div>
        <Link to={`/api/shelf/${this.props.id.charAt(0)}`} style={{textDecoration: 'none'}}><div className='shelf_link' >SHELF {this.props.id.charAt(0)}</div></Link>
            <div className='bin_id'>Update Bin {this.props.id.charAt(1)}</div>
        </div>
    )
 }
}