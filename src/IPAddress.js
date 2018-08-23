import React, { Component } from "react";
import "./IPAddress.css";


// this component will be responsible for displaying the additional text and ensuring our 
// IP address is visually formatted exactly the way we want.

class IPAddress extends Component {
  render() {
    return (
      <div>
        <div>
            <h1>{this.props.ip}</h1>
            <p>( This is your IP address )</p>
        </div>      
      </div>
    );
  }
}
 
export default IPAddress;