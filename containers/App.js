import React, { Component } from "react";
import CardList from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from '../components/Scroll'

class App extends Component {
  state = {
    robots: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredRobot = robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
