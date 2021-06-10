import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} /> 
      </div>
    </Router>
  )
}

export default App;


// when the user loads into the page they are going to see a page for all of their employees 
// things to do 
  // create a banner for the user to see/reload the page when they click the company name 
  
  // On load
    // the API call is going to run 
    // the call is going to then populate the users onto the table 

  //onclick 
    //the user is going to be able to sort each of the columns using bootstrap

  //components to make 
    //Navbar 
    //table for the employees to populate
    //employee row 
    
