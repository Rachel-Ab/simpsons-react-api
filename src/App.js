import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: [],
    }
  }
  getSimpsons = () => {
  axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(resp => resp.data)
    .then(data => {
      console.log(data)
      this.setState({
        simpsons: data[0],
    });
  });
  }
 
render() {
  return (
    <div className="App">
    <QuoteCard simpsons={this.state.simpsons}/>
    <button type ="button" onClick={this.getSimpsons}>New quote</button>
    </div>
  );
}

}
 
export default App;
