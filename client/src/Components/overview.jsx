import React from 'react';

class Overview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div>
        <h1 className="header">{this.props.houseName}</h1>
        <div className="numberOf">
          <i className="fas fa-users"></i><span className="icons">{this.props.numberOfGuests} guests</span>
          <i className="fas fa-door-open"></i><span className="icons">{this.props.numberOfBedrooms} bedrooms</span>
          <i className="fas fa-bed"></i><span className="icons">{this.props.numberOfBeds} beds</span>
          <i className="fas fa-bath"></i><span className="icons">{this.props.numberOfBaths} baths</span>
        </div>
        <div className="highlights"> <div className="title">Highlights</div> <br/>
        {this.props.highlights}</div>
        <div className="description"><div className="title">The space</div> <br/>{this.props.description}</div>
        <div className="contact">Contact host</div>
        <div className="border-line"></div>
        <div className="amenities"><div className="title">Amenities</div><br/>
          <i className="fas fa-laptop"></i><span className="amenity-items">Laptop friendly work space</span><br/>
          <i className="fas fa-wifi"></i><span className="amenity-items">Wifi</span><br/>
          <i className="fas fa-tv"></i><span className="amenity-items">TV</span><br/>
        </div>
      </div>
    )
  }
}


export default Overview;