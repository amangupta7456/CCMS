import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ClientList from '../components/ClientList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [clients, setClients] = useState([
    { client_id: 'client1', client_name: 'Client 1' },
    { client_id: 'client2', client_name: 'Client 2' },
  ]);

  const handleDelete = (clientId) => {
    setClients(clients.filter((client) => client.client_id !== clientId));
  };

  return (
    <div>
      <h1>Client Configuration List</h1>
      <Button as={Link} to="/add-client" variant="success" className="mb-3">
        Add New Client
      </Button>
      <ClientList clients={clients} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;




