import React from 'react';

class Overview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render(){

      return (
      <div>{this.props.data.houseName}<br/>
      {this.props.data.numberOfGuests}<br/>
      {this.props.data.numberOfBedrooms}<br/>
      {this.props.data.numberOfBeds}<br/>
      {this.props.data.numberOfBaths}<br/>
      {this.props.data.Highlights}<br/>
      {this.props.data.description}</div>
    )
  }
}


export default Overview;