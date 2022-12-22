import Header from "./components/Header.jsx";
import Card from "./components/Card";
import Footer from "./components/Footer.jsx";

const App = () => {
  
  return (
    <>
      <Header title="Galería de Imágenes con React"/>
      <div className="container">
        <div className="row">
          <Card img={"https://cdn.pixabay.com/photo/2015/04/22/16/12/hemerocallis-735011_960_720.jpg"} title={"Azucena"} description={"También conocida como lirio, pertenece a la familia Liliaceae."}/>
          <Card img={"https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg"} title={"Flor de loto"} description={"Planta acuática de la familia 	Nelumbonaceae."}/>
          <Card img={"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg"} title={"Margarita africana"} description={"Perteneciente a la familia Asteraceae."}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App;
