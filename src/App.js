import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Invoices from "./components/Invoices";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/invoices" component={Invoices} />
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
