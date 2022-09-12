import { Container, Row, Col} from 'react-bootstrap';
import Book from './Book.js';
import Filter from './Filter.js';
import './../../css/MyBooks.css';

export default function MyBooks(props) {
    return (
    <Container id='myBooksContainer'>
      <Row id="filterContainer">
        <Filter />

        <Col xs='9' lg='10'>
          <Container id="allBookDiv">
            {
              props.books && 
              props.books.map(book => {
                return <Book
                  key={book._id}
                  title={book.title}
                  author={book.author}
                  notes={book.notes}
                  quotes={book.quotes}
                />
              })
            }
          </Container>
        </Col>
      </Row>
    </Container>
  );
}



