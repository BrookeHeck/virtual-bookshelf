import { Col, Card } from 'react-bootstrap';
import Lists from './Lists'

export default function Filter() {
  return (
    <Col xs='3' lg='2'>
      <Card style={{ width: '15rem', height: '100vh', marginLeft: '10px' }} >
        <Card.Body>
          <Card.Title>Filter By List</Card.Title>
          <Lists />
          <Card.Title>Sort By</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}