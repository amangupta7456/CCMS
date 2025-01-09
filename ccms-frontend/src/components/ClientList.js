import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ClientList = ({ refreshTrigger }) => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/configurations');
      setClients(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('There was an error fetching the client configurations!');
      console.error('There was an error fetching the client configurations!', error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [refreshTrigger]);

  const handleDelete = async (clientId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/configurations/${clientId}`);
      fetchClients(); // Re-fetch the client list after deletion
    } catch (error) {
      setError('There was an error deleting the client configuration!');
      console.error('There was an error deleting the client configuration!', error);
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}

      <ListGroup>
        {clients.map((client) => (
          <ListGroup.Item key={client.client_name}>
            <Link to={`/client-config/${client.client_id}`}>{client.client_id}</Link>
            <Button
              variant="danger"
              className="ml-3"
              onClick={() => handleDelete(client.clien_id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ClientList;





