import Carousel from "react-bootstrap/Carousel";
import image from "../assets/js.png";
import classes from "./Carousel.module.css";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={image} alt="..." className={classes.image} />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={image} alt="..." className={classes.image} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} alt="..." className={classes.image} />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur. 
           </p>
          </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
