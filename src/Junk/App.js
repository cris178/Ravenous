import React from "react";
import "./App.css";

import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import Yelp from "./util/Yelp";

/*
const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90
};

//This is an array of the objects above the array is passed to businesslist.js
const businesses = [business, business, business, business, business, business];
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    //business is a key
    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    //` not '
    //console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);

    //Wehn we get our list of businesses we chain a then and set the state
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
