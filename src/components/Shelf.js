import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ShelfNavbar from './Navbars/shelfNavbar'

import '../styles/bins.css'

export default class Shelf extends Component {
  constructor() {
    super();

    this.state = {
      bins: []
    };
  }

  componentDidMount() {
    axios.get(`/api/shelf/${this.props.match.params.id}`).then(res => {
        console.log(res.data)
         this.setState({
             bins: res.data
         })
    });
  }

  render() {
     let mappedBins =  this.state.bins.map( (x, i) => {
        //  This Dynamically renders a URL based on Shelves and Bins sending us to either update or create
        // Ternary operator to give us a different button on our bins page 
          return (
          x.name !== null    
         ?
         <Link to={`/api/update/${x.shelf}${x.bin}`} key={i}  style={{textDecoration: 'none'}} image={this.state.bins[0].image_url}><div className='full_bin'>{`Bin ${x.bin}`}</div></Link>
         :
         <Link to={`/api/create/${x.shelf}${x.bin}`} key={i}  style={{textDecoration: 'none'}}><div className='empty_bin'>+ Add Inventory</div></Link>
          )
      })
    return(
        <div className='bin_container_parent'>
          <ShelfNavbar 
           id={this.props.match.params.id}
          />
            <div className='bin_container'>
             { mappedBins }
            </div>
        </div>
    )
  }
}
