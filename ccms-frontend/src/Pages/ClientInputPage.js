import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClientForm from '../components/ClientForm';

const ClientInputPage = () => {
  const handleSubmit = (formData) => {
    console.log('Client data submitted:', formData);
    // You can redirect the user or provide a success message
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2>Provide Your Configuration</h2>
          <ClientForm onSubmit={handleSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default ClientInputPage;
