import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = { parkings : [] };
  }

  componentDidMount() {
    fetch('https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=export-api-parking-citedia')
    .then(response => response.json())
    .then(data => {
      this.setState({parkings : data.records});
     console.log(data);
    })
    
  }
  render() {
    /* 
orange : #FFA240
bleu foncé : #0988B2
bleu clair : #40CFFF
orange clair : #FFAE5A
marron : #B2681B
*/
   const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: '#99CFFF',
      border : 'solid 2px #FFA240'
    }; 
  const items = this.state.parkings.map(parking => (
    <article key={parking.fields.key}>
        <h3>{parking.fields.key}</h3>
        <h3>{parking.fields.free} places disponibles</h3>
        <h3>{parking.fields.status}</h3>
    </article>
));
    return (
      <div style={style}>{items[0] }</div>
    );
  }

}

export default Clock;