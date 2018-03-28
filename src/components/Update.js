import React, { Component } from 'react';
import axios from 'axios';

import '../styles/update.css'

import UpdateNavbar from './Navbars/updateNavbar'

export default class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            image: '',
            editToggle: false
        
        }
        this.updateBin = this.updateBin.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.deleteBin = this.deleteBin.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/update/${this.props.match.params.id}`).then( res => {
            console.log(res.data);
            this.setState({name: res.data[0].name, price: res.data[0].price, image: res.data[0].image_url})
        })
    }

    handleToggle() {
        this.setState({ 
            editToggle: !this.state.editToggle
        })
    }

    updateBin() {
        axios.put(`/api/update/${this.props.match.params.id}`, {name: this.state.name, price: this.state.price}).then( res => {
            // console.log(res.data)
            
        })
        this.setState({
            editToggle: !this.state.editToggle
        })
        this.props.history.goBack()
    }

    deleteBin() {
        axios.put(`/api/update/${this.props.match.params.id}`).then( res => {
            console.log('Bin Deleted!')
            this.props.history.goBack()
        });
    }
    
    render() {
        console.log(this.state)
        return(
            <div>
            <UpdateNavbar 
            id={this.props.match.params.id}
             />
            <div className='update_parent'>
            <img className='image_container' src={this.state.image} />
    
            <div className='update_container'>
                <h3>Name</h3>
                 <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} disabled={!this.state.editToggle} />
                <h3>Price</h3>
                 <input value={this.state.price} onChange={e => this.setState({ price: e.target.value })} disabled={!this.state.editToggle} />
              <br />
              <div className='button_container'>
              {
              (this.state.editToggle)
              
              ?
                <div className='edit_button' onClick={ ()=> this.updateBin() }>SAVE</div>
              :
                <div className='edit_button' onClick={ () => this.handleToggle() }>EDIT</div>
              }
                <div className='delete_button' onClick={ () => this.deleteBin() }>DELETE</div>
                </div>
              </div>
            </div>
            </div>
        )
    }
}

// The disabled operator allows us to disable the imput fields.
// The ternary operator on our first button allows us to toggle
//  between Save or Edit being displayed on the button
