import React, { useState, useEffect } from "react";

const ClientDetail = props => {
  let [clientDetails, setClientDetails] = useState({});
  let clientId = props.match.params.client;
  // let client = props.client || {};

  let [isLoading, setLoading] = useState(false);
  useEffect(() => fetchClientsById(clientId), [clientId]);

  function fetchClientsById(id) {
    setLoading(true);
    fetch(`https://5d38fa74d8bb290014d27e22.mockapi.io/client/${id}`)
      .then(response => response.json())
      .then(clientData => setClientDetails(clientData))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }
  return (
    <div>
      <h3>Client Details</h3>
      {isLoading && <p>Loading...</p>}
      <p>
        Name: {clientDetails.name} {props.match.params.client}
      </p>
      <p>Email: {clientDetails.email}</p>
    </div>
  );
};

export default ClientDetail;
