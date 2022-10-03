import { Col, Card } from 'react-bootstrap';

export default function Filter() {
  return (
    <Col xs='3' lg='2'>
      <Card style={{ width: '15rem', height: '100vh', marginLeft: '10px' }} >
        <Card.Body>
          <Card.Title>Filter By List</Card.Title>
          <Card.Title>Sort By</Card.Title>
          <Card.Text>Genre</Card.Text>
          <Card.Text>Date Read</Card.Text>
          <Card.Text>status</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}