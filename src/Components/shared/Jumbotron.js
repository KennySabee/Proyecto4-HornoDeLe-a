import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { db } from "./../../config/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useState, useEffect } from "react";

const Jumbotron = () => {
  const [cardsSite, setCardsSite] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "itemsCard"));
    onSnapshot(q, (querySnapshot) => {
      setCardsSite(
        querySnapshot.docs.map((item) => ({
          id: item.id,
          data: item.data(),
        }))
      );
    });
  }, []);

  console.log(cardsSite);

  return (
    <div className="container text-center d-flex justify-content-center ">
      <div className="row">
        
          <Card style={{ width: "18rem"  }}>
            {cardsSite.map((items) => (
              <>
                <Card.Img
                  className="d-flex" 
                  src={items.data.img} 
                  alt="First Card"
                  variant="top"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>{items.data.title}</h3>
                  </Card.Title>

                  <Card.Text>
                    <p>{items.data.description}</p>
                  </Card.Text>
                  <Button variant="warning">Ver más</Button>
                </Card.Body>
              </>
            ))}
          </Card>
        
        
      </div>
    </div>
  );
};
export default Jumbotron;
