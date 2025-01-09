import React, { useState, useEffect } from 'react';
import { useParams, useNavigation } from 'react-router-dom';
import ClientForm from '../components/ClientForm';

const ClientConfigPage = () => {
  const { clientId } = useParams();
  const history = useNavigation();
  
  const [clientConfig, setClientConfig] = useState(null);

  useEffect(() => {
    // Simulate fetching a client configuration
    const client = {
      client_id: clientId,
      user_preferences: { language: 'English', timezone: 'UTC', notifications: { email: true, sms: false } },
      ui_ux_themes: { theme: 'Light' },
    };
    setClientConfig(client);
  }, [clientId]);

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











