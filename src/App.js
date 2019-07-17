import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import Business from "./components/Business/Business";

let business = {
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

class App extends React.Component {
  //Parameters are what we will send to the yelpAPI
  searchYelp(term, location, sortBy) {
    console.log("You are searching for ${term}, ${location}, and ${sortBy}");
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <searchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
