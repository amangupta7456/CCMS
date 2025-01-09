import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClientForm from '../components/ClientForm';

const ClientConfigPage = () => {
  const { clientId } = useParams();
  const history = useNavigate();
  
  const [clientConfig, setClientConfig] = useState(null);
  const handleSave = (newConfig) => {
    // Simulate saving the configuration
    setClientConfig(newConfig);
    history.push('/');
  };

  return (
    <div>
      <h1>Configure {clientId}</h1>
      {clientConfig ? (
        <ClientForm clientConfig={clientConfig} onSubmit={handleSave} />
      ) : (
        <p>Loading configuration...</p>
      )}
    </div>
  );
};

export default ClientConfigPage;











