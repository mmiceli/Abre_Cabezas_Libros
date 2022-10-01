import Carousel from 'react-bootstrap/Carousel';

export function ItemCarousel ({item}) {

  const {imagen, imagenDos}= item
  
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenDos}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

//export default NoTransitionExample;