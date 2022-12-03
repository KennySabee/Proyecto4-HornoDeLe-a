import Carrusel from "../shared/Carrusel";
import Jumbotron from "../shared/Jumbotron";


const Home = () => {
    return  (
      <>
        <Carrusel />
        <br />
        <div className="jumbotron">
        <Jumbotron />
        </div>
        
      </>
    );
  };
  export default Home;
  