import React from 'react';

class belowReviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>
        <div className="description"><div className="title">The neighborhood</div> <br/>{this.props.data.Neighborhood}
        </div>
        <div className="description"><div className="title">Hosted by Steve<br/>
        <i className="fas fa-star"></i><span className="icons">{this.props.data.numberOfGuests} Reviews</span>
        <i className="fas fa-user-check"></i><span className="icons">{this.props.data.numberOfReferences} References</span>
        </div><br/>
        {this.props.data.HostProfile}
        </div>
      </div>
      )
  }
}

export default belowReviews;

/*

*/