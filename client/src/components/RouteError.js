import React from "react";
import '../index.css';
export default class Error extends React.Component{
  render(){
    return(
      
      <div className = "error-message">
        <h2 className = "error-text">ERROR 404</h2>
        <h3>The page you are looking for does not exist or is in parallel universe!!!</h3>
      </div>
    )
  }
}
