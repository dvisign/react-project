import React, {Component} from 'react';
import Costomer from './components/Costomer';
import './App.css';

const customer = {
  "name":"gline",
  "birthday" : "880922",
  "gender" : "남",
  "job" : "직장인"
}

class App extends Component {
  render() {
    return (
      <Costomer 
        name = {customer.name}
        birthday = {customer.birthday}
        gender = {customer.gender}
        job = {customer.job}
      />
    )
  }
}

export default App;
