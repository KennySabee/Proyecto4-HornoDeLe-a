import Carousel from 'react-bootstrap/Carousel';

const banner1 = 'Proyecto4-HornoDeLe-a/img/banner1.jpg'
const banner2 = 'Proyecto4-HornoDeLe-a/img/banner2.jpg'
const banner3 = 'Proyecto4-HornoDeLe-a/img/banner3.jpg'
const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block width:150px"
          src={banner1}
          alt="First slide"
          width={'100%'}
          height={'50%'}
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-responsive"
          src={banner2}
          alt="Second slide"
          width={'100%'}
          height={'50%'}
          
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-responsive"
          src={banner3}
          alt="Third slide"
          width={'100%'}
          height={'50%'}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  };
  export default Carrusel;
  