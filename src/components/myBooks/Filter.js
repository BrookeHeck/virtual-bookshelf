import { Col, Card, Button } from 'react-bootstrap';

export default function Filter() {
  return (
    <Col xs='3' lg='2'>
      <Card style={{ width: '15rem', height: '100vh', marginLeft: '10px' }} >
        <Card.Body>
          <Card.Title>Filters</Card.Title>
          <Card.Text>Genre</Card.Text>
          <Card.Text>Date Read</Card.Text>
          <Card.Text>Finished</Card.Text>
          <Button style={{ marginTop: '2.5rem' }}>Add to Collection</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}