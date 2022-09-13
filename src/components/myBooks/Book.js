import { Card, Button } from 'react-bootstrap';

export default function Book(props) {
  return (
    <Card style={{ width: '200px', margin: '0 auto' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.author}</Card.Text>
        <Card.Text>{props.genre}</Card.Text>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>{props.status}</Card.Text>
        <Card.Link href="#">Notes</Card.Link>
        <Card.Link href="#">Quotes</Card.Link>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
}