import { Carousel } from 'react-bootstrap';

export default function FeaturedBooks() {
  return (
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
  );
}