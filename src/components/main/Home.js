import { Container, Carousel } from "react-bootstrap";
import './../../css/Home.css';

export default function Home() {
  return (
    <>
      <h1>Virtual Bookshelf</h1>
      <Container id='carousel-container'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placeholder.pics/svg/600x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Featured Book 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placeholder.pics/svg/600x400"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Featured Book 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placeholder.pics/svg/600x400"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Featured Book 3</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Container>
    </>
  );
}