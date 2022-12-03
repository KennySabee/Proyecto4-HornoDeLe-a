import Carousel from "react-bootstrap/Carousel";
import { db } from "./../../config/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState, useEffect } from "react";

const banner1 = "Proyecto4-HornoDeLe-a/img/banner1.jpg";
const banner2 = "Proyecto4-HornoDeLe-a/img/banner2.jpg";
const banner3 = "Proyecto4-HornoDeLe-a/img/banner3.jpg";

const Carrusel = () => {
  const [newsSite, setNewsSite] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "itemsCarrusel"));
    onSnapshot(q, (querySnapshot) => {
      setNewsSite(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  console.log(newsSite)

  return (
    <Carousel>
      {newsSite.map((items) => (
        <Carousel.Item>

          <img className="d-block" src= {items.data.img} alt="First Slide" />
          <Carousel.Caption>
            <h3>{items.data.title}</h3>
            <p>{items.data.description}</p>
          </Carousel.Caption>

        </Carousel.Item>

      ))}
      
    </Carousel>
  );
};
export default Carrusel;
