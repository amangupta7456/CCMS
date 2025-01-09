import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClientForm = ({ clientConfig, onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    client_id: '',
    client_name: '',
    language: '',
    timezone: '',
    notifications: { email: false, sms: false },
    product_name: '',
    feature_flags: { feature1: false, feature2: false },
    role: '',
    permissions: [],
    theme: '',
    branding: { logo: '', color: '' },
  });

  useEffect(() => {
    if (clientConfig) {
     setFormData({
        client_id: clientConfig.client_id || '',
        client_name: clientConfig.client_name || '',
        language: clientConfig.user_preferences.language || '',
        timezone: clientConfig.user_preferences.timezone || '',
        notifications: clientConfig.user_preferences.notifications || { email: false, sms: false },
        product_name: clientConfig.product_settings.product_name || '',
        feature_flags: clientConfig.product_settings.feature_flags || { feature1: false, feature2: false },
        role: clientConfig.access_permissions.role || '',
        permissions: clientConfig.access_permissions.permissions || [],
        theme: clientConfig.ui_ux_themes.theme || '',
        branding: clientConfig.ui_ux_themes.branding || { logo: '', color: '' },
      }) ;
    }
  }, [clientConfig]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNestedChange = (e, category) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      client_id: formData.client_id,
      user_preferences: {
        language: formData.language,
        timezone: formData.timezone,
        notifications: formData.notifications,
      },
      product_settings: {
        product_name: formData.product_name,
        feature_flags: formData.feature_flags,
      },
      access_permissions: {
        role: formData.role,
        permissions: formData.permissions,
      },
      ui_ux_themes: {
        theme: formData.theme,
        branding: formData.branding,
      },
    };

    try {
      if (clientConfig) {
        // Update existing client configuration
        await axios.put(`http://localhost:8000/configurations/${formData.client_id}`, dataToSend);
      } else {
        // Create new client configuration
        await axios.post('http://localhost:8000/configurations', dataToSend);
      }
      onSubmit(dataToSend); // Notify parent component (e.g., ClientConfigPage)
      navigate('/'); // Navigate to the homepage
    } catch (error) {
      console.error('There was an error saving the configuration!', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formClientID">
            <Form.Label>Client ID</Form.Label>
            <Form.Control
              type="text"
              name="client_id"
              value={formData.client_id}
              onChange={handleChange}
              placeholder="Enter Client ID"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="ClientName">
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              type="text"
              name="client_name"
              value={formData.client_name}
              onChange={handleChange}
              placeholder="Enter Client Name"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              placeholder="Enter Product Name"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formLanguage">
            <Form.Label>Language</Form.Label>
            <Form.Control
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="Enter Language"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formTimezone">
            <Form.Label>Timezone</Form.Label>
            <Form.Control
              type="text"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              placeholder="Enter Timezone"
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formNotifications">
        <Form.Label>Notifications</Form.Label>
        <Form.Check
          type="checkbox"
          label="Email Notifications"
          name="email"
          checked={formData.notifications.email}
          onChange={(e) => handleNestedChange(e, 'notifications')}
        />
        <Form.Check
          type="checkbox"
          label="SMS Notifications"
          name="sms"
          checked={formData.notifications.sms}
          onChange={(e) => handleNestedChange(e, 'notifications')}
        />
      </Form.Group>

      <Form.Group controlId="formFeatureFlags">
        <Form.Label>Feature Flags</Form.Label>
        <Form.Check
          type="checkbox"
          label="Feature 1"
          name="feature1"
          checked={formData.feature_flags.feature1}
          onChange={(e) => handleNestedChange(e, 'feature_flags')}
        />
        <Form.Check
          type="checkbox"
          label="Feature 2"
          name="feature2"
          checked={formData.feature_flags.feature2}
          onChange={(e) => handleNestedChange(e, 'feature_flags')}
        />
      </Form.Group>

      <Form.Group controlId="formRole">
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter Role"
        />
      </Form.Group>


      <Form.Group controlId="formTheme">
        <Form.Label>Theme</Form.Label>
        <Form.Control
          type="text"
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          placeholder="Enter Theme"
        />
      </Form.Group>

      <Form.Group controlId="formBrandingLogo">
  <Form.Label>Branding Logo</Form.Label>
  <Form.Control
    type="text"
    name="logo"
    value={formData.branding.logo}
    onChange={(e) => handleNestedChange(e, 'branding')}
    placeholder="Enter Branding Name"
  />
</Form.Group>

<Form.Group controlId="formBrandingColor">
  <Form.Label>Branding Color</Form.Label>
  <Form.Control
    type="text"
    name="color"
    value={formData.branding.color}
    onChange={(e) => handleNestedChange(e, 'branding')}
    placeholder="Enter Branding Color"
  />
</Form.Group>

      <Button variant="primary" type="submit">
        Save Configuration
      </Button>
    </Form>
  );
};

export default ClientForm;