import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from './Components/overview.jsx';
import BelowReviews from './Components/belowReviews.jsx';

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
          <Overview data={this.state.currentHouse} />
        </div>
        <div>
          <BelowReviews data={this.state.currentHouse} />
        </div>
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('house-description'));

/*
plug in params into the CDM

on line 25 you will begin to render
**detailed console.logs
search react render

client => server => database
client <= server <= database

*/

