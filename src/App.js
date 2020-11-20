// create your App component here
import React from 'react';

export default class App extends React.Component {

  state = {
    people: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(r => r.json())
    .then(data => this.setState({people: data.people}))
  }

  render() {
    return (<div>
      {this.state.people.map((person, index) => <h1 key={index}>{person.name}</h1>)}
    </div>)
  }
}