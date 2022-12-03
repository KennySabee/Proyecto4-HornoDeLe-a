import Carousel from "react-bootstrap/Carousel";
import { db } from "./../../config/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState, useEffect } from "react";

const Carrusel = () => {
  const [newssSite, setnewssSite] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "itemsCarrusel"));
    onSnapshot(q, (querySnapshot) => {
      setnewssSite(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  console.log(newssSite)

  return (
    <div className="container">
    <Carousel>
      {newssSite.map((items) => (
        <Carousel.Item>

          <img className="d-block" src= {items.data.img} alt="First Slide" />
          

        </Carousel.Item>

      ))}
      
    </Carousel>
    </div>
  );
};
export default Carrusel;
