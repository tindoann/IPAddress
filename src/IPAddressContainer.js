import React, { Component } from "react";
import IPAddress from "./IPAddress";

// create a component whose job it is to fetch the IP address from a web service, 
// store it as state, and then share that state as a prop to any component that requires it.

var xhr;
 
class IPAddressContainer extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      ip_address: "..."
    };
 
    this.processRequest = this.processRequest.bind(this);
  }
 
  //  When our component becomes active and the componentDidMount lifecycle 
  // method gets called, we make our HTTP request and send it off to the ipinfo.io web service:
  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/json", true);
    xhr.send();
 
    xhr.addEventListener("readystatechange", this.processRequest, false);
  }
 
  // When we hear a response back from the ipinfo service, we call 
  // the processRequest function to help us deal with the result

  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);

 // This function parses the data returned by the web service, assigns the result to an object called response, and then stores just the 
 // IP address from the response object into a state variable called ip_address
 
      this.setState({
        ip_address: response.ip
      });
    }
  }
 
  render() {
    return (
           <IPAddress ip={this.state.ip_address}/>
    );
  }
};
 
export default IPAddressContainer;