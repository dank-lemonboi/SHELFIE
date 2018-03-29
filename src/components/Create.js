import React, { Component } from "react";
import axios from "axios";

import '../styles/create.css'

import CreateNavbar from './Navbars/createNavbar'

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0
    };
    this.addInventory = this.addInventory.bind(this);
  }

  addInventory() {
    //   We need to figure out the logic to only allow the function to work if the
    // input price is a number, else do nothing.
    if (this.state.name && this.state.price) {
      axios
        .put(`/api/create/${this.props.match.params.id}`, {
          name: this.state.name,
          price: this.state.price
        })
        .then(res => {
          console.log("null values updated");
          // This will allow us to go back to the previous page
          this.props.history.goBack();
        });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
      <CreateNavbar
      id={this.props.match.params.id}
      />
      <div className='create_parent'>
        <div className='create_wrapper'>
          <h3>Name</h3>
          <input className='item_name' onChange={e => this.setState({ name: e.target.value })} />
          <h3>Price</h3>
          <input className='item_price' onChange={e => this.setState({ price: e.target.value })} />
          <br />
          <div className='inventory_button' onClick={() => this.addInventory()}>+ Add to Inventory</div>
        </div>
      </div>
      </div>
    );
  }
}
