import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/clients">Clients</Link>
      </li>
      <li>
        <Link to="/invoices">Invoices</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
