import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

//States have been created here and their handle functions

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //The state object has three keys term, location, and sortby
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };

    //Both of the functions located blow use this so we need to bing them to have acess to this
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return "active";
    }
    return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  //Since both below will be related to events being triggered, both should accept event as an argument.
  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSearch(event) {
    //To acess passed down functions or values need to use props
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );

    //Anchor tags redirect meaning they restart app  change url remove this functionality.
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          //We bind handle sort by change because it uses this.setStat in order to use that it needs to be binded then send in the value to the function
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.handleTermChange}
            placeholder="Search Businesses"
          />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
