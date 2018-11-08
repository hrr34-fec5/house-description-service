import React from 'react';
import axios from 'axios';
import Overview from './overview.jsx';
import BelowReviews from './belowReviews.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentHouse: {}
    };
  }
  componentDidMount() {
    axios.get('/home', {
    params: {
      houseName: "Ducimus aut officiis qui voluptas rerum quaerat."
    }
  }).then(res => {
    let data = res.data;
    this.setState({currentHouse: data})
  });

  }
  render () {
    return (
      <div>
        <div>
          <Overview
          houseName={this.state.currentHouse.houseName}
          numberOfGuests={this.state.currentHouse.numberOfGuests}
          numberOfBedrooms={this.state.currentHouse.numberOfBedrooms}
          numberOfBeds={this.state.currentHouse.numberOfBeds}
          numberOfBaths={this.state.currentHouse.numberOfBaths}
          highlights={this.state.currentHouse.Highlights}
          description={this.state.currentHouse.description}
          />
        </div>
        <div>
          <BelowReviews
          neighborhood={this.state.currentHouse.Neighborhood}
          numberOfReviews={this.state.currentHouse.numberOfReviews}
          numberOfReferences={this.state.currentHouse.numberOfReferences}
          hostProfile={this.state.currentHouse.HostProfile} />
        </div>
      </div>
      );
  }
}


export default App;