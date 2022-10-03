import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Note({ note }) {
  
  return (
    <ListGroup horizontal>
      <ListGroup.Item>{note.header}</ListGroup.Item>
      <ListGroup.Item>{note.date}</ListGroup.Item>
      <ListGroup.Item>{note.note}</ListGroup.Item>
    </ListGroup>
  )
}