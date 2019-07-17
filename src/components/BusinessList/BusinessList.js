import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";

class BusinessList extends React.Component {
  render() {
    return (
      //Here we take the array get the individual objects and map them to a Business component and pass the individual object to the component
      <div className="BusinessList">
        {this.props.businesses.map(business => {
          return <Business business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
