import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import styles from './styles.css'

class Index extends Component {

  constructor(props){
    super(props);
    this.state = {
      cardNumber: '',
      cardType: '',
      cardInfo: [
        {
          name: 'American Express',
          startsWith : [34,37],
          maxDigits: [15]
        },
        {
          name: 'Diners Club - Carte Blanche',
          startsWith : [300, 301, 302, 303, 304, 305],
          maxDigits: [14]
        },
        {
          name: 'Diners Club - International',
          startsWith : [36],
          maxDigits: [14]
        },
        {
          name: 'Diners Club - USA & Canada',
          startsWith : [54],
          maxDigits: [16]
        },
        {
          name: 'Discover',
          startsWith : this._discoverRange(),
          maxDigits: [16,19]
        },
        {
          name: 'InstaPayment',
          startsWith : [637, 638, 639],
          maxDigits: [16]
        },
        {
          name: 'JCB',
          startsWith : this._GCBRange(),
          maxDigits: [16,19]
        },
        {
          name: 'Maestro',
          startsWith : [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763],
          maxDigits: [16,19]
        },
        {
          name: 'MasterCard',
          startsWith: this._masterCardRange(),
          maxDigits: [16]
        },
        {
          name: 'Visa Electron',
          startsWith: [4026, 417500, 4508, 4844, 4913, 4917],
          maxDigits: [16]
        },
        {
          name: 'Visa',
          startsWith: [4],
          maxDigits: [13,16,19]
        },
      ]
    }
  }

  _discoverRange = () => {
    const range = [644, 645, 646, 647, 648, 649, 65];
    for (let index = 622126; index <= 622925; index++) {
      range.push(index);
    }
    return range;
  }

  _masterCardRange = () => {
    const range = [51, 52, 53, 54, 55];
    for (let index = 222100; index <= 272099; index++) {
      range.push(index);
    }
    return range;
  }

  _GCBRange = () => {
    const range = [];
    for (let index = 3528; index <= 3589; index++) {
      range.push(index);
    }
    return range;
  }
  
  _onChangeCardNumber =(e)=>{
    this.setState({cardNumber: e.target.value},state=>{
      let card =  this.state.cardInfo.filter((element)=>{
        return (
          element.startsWith.includes( parseInt(this.state.cardNumber.slice(0,1))) ||
          element.startsWith.includes( parseInt(this.state.cardNumber.slice(0,2))) ||
          element.startsWith.includes( parseInt(this.state.cardNumber.slice(0,3))) ||
          element.startsWith.includes( parseInt(this.state.cardNumber.slice(0,4))) ||
          element.startsWith.includes( parseInt(this.state.cardNumber.slice(0,5))) ||
          element.startsWith.includes( parseInt(this.state.cardNumber.slice(0,6)))
        ) ;
        });
      if(card.length > 0){
        this.setState({cardType: card[0].name})
      }else{
        this.setState({cardType: ''})
      }
    });
  }


  render() {
    console.log('card type',this.state.cardType);
    
    return (
      <div>
        <input type="text" value={this.state.cardNumber} onChange={(e)=>this._onChangeCardNumber(e)}  />
        <br/>
        {this.state.cardType}
      </div>
    )
  }
}

export default Index;
