import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import ClientDetail from "./ClientDetail";

const Clients = props => {
  let [clients, setClients] = useState([]);
  let [isLoading, setLoading] = useState(false);

  function fetchClients() {
    setLoading(true);
    fetch("https://5d38fa74d8bb290014d27e22.mockapi.io/client")
      .then(response => response.json())
      .then(clientList => setClients(clientList))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  let clientcomponents = clients.map(client => (
    <li key={client.id}>
      <Link to={`${props.match.url}/${client.id}`}>{client.name}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Clients</h2>

      <button onClick={fetchClients}>Fetch Clients</button>
      <nav>
        {isLoading && <p>Loading...</p>}
        <ul>{clientcomponents}</ul>
      </nav>

      <div>
        <h2>Client:</h2>
        <Route
          path={`${props.match.url}/`}
          exact
          render={() => <p>Clients Home</p>}
        />
        <Route path={`${props.match.url}/:client`} component={ClientDetail} />
        {/*<Route path={`${props.match.url}/baker-and-sons`} render={() => <p>Baker and Sons</p>} />
        <Route path={`${props.match.url}/chortleware`} render={() => <p>Chort Leware</p>} /> */}
      </div>
    </div>
  );
};

export default Clients;
