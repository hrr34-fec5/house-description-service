import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    axios.get('/home', {
    params: {
      houseName: "Ducimus aut officiis qui voluptas rerum quaerat."
    }
  }).then(res => console.log(res));

  }
  render () {
    return (
      <div> You better work!</div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('house-description'));

/*
plug in params into the CDM

*/