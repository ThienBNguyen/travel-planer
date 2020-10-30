import React from 'react';
import Form from 'react-bootstrap/Form';

export default function SearchBarFrom() {
  return (
    <Form className="search-bar">
      <Form.Group controlId="formGroundDestination">
        <Form.Label>Your Next Destination:</Form.Label>
        <Form.Control
          type="destication"
          placeholder="Destination"
          className="form-control"
        />
      </Form.Group>
    </Form>
  );
}
