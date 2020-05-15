import React from 'react';
import logo from './logo.svg';
import './App.css';
import {

  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom"



function Home() {

  return (

    <div>
      
      <h2>Home</h2>
    </div>

  )


  

}


function About() {
  
  return (

    <div>
      <h2>About</h2>
    </div>
  )

}

function Contacts() {

  return (
      <div>
        <h2>Contacts</h2>
      </div>

  )
  
}


export default class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <ul>
            <li><Link to = "/">Home</Link> </li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/contacts">Contacts</Link></li>
          </ul>


          <hr />

          <Route path = "/" component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path = "/contacts" component = {Contacts} />
        </div>

      </Router>


    )
  }
}