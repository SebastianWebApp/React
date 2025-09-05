// Creacion der Hola mundo

// function App(){
//   return <p>Hola Mundo</p>
// }

// Creacion de Hola mundo con una variable

// function App(){

//   const nombre = "";

//   if(nombre){
//     return <p>Hola {nombre}</p>
//   }

//   return <p>Hola mundo</p>

// }

// // Importamos los elementos
// import Titulo from "./Titulo";

// function App() {
//   return <Titulo></Titulo>;
// }

// export default App;

// Utilizamos Fragments para poder colocar mas de un elemento

// import Titulo from "./Titulo";
// import Card from "./components/Card";

// function App() {
//   return (
//     <>
//       <Titulo></Titulo>
//       <Card></Card>
//     </>
//   );
// }

// Propiedades
// import Titulo from "./Titulo";
// import Card from "./components/Card";
// import CardBody from "./components/CardBody";

// Maneja Props y Children
// function App() {
//   return (
//     <>
//       <Titulo></Titulo>
//       <Card titulo={"Hola como estas"}>
//         <CardBody titulo={"Hola Mundo"} texto={"Todo Bien"}></CardBody>
//       </Card>
//     </>
//   );
// }

// Listas y hooks
// import Titulo from "./Titulo";
// import Card from "./components/Card";
// import CardBody from "./components/CardBody";
// import Lista from "./components/Lista";

// function App() {
//   const Datos: string[] = ["Hola", "Como", "Bien"];

//   // Creamos la funcion para segun los datos que nos manda desde este caso la lista ejecutar algun proceso
//   const handleSelect = (elemento: string, index: number) => {
//     console.log(elemento + " " + index);
//   };

//   const alerta = (elemento: string) => {
//     alert(elemento);
//   };

//   return (
//     <>
//       <Titulo></Titulo>
//       <Card titulo={"Hola como estas"}>
//         <CardBody titulo={"Hola Mundo"} texto={"Todo Bien"}></CardBody>
//       </Card>

//       <Lista data={Datos} onSelect={handleSelect}></Lista>
//       <Lista data={Datos} onSelect={alerta}></Lista>
//     </>
//   );
// }

// Renderizado condicional

// import Titulo from "./Titulo";
// import Card from "./components/Card";
// import CardBody from "./components/CardBody";
// import Lista from "./components/Lista";

// function App() {
//   const Datos: string[] = ["Hola", "Como", "Bien"];

//   // Creamos la funcion para segun los datos que nos manda desde este caso la lista ejecutar algun proceso
//   const handleSelect = (elemento: string, index: number) => {
//     console.log(elemento + " " + index);
//   };

//   const alerta = (elemento: string) => {
//     alert(elemento);
//   };

//   const condicion =
//     Datos.length !== 0 ? (
//       <>
//         <Lista data={Datos} onSelect={handleSelect}></Lista>
//         <Lista data={Datos} onSelect={alerta}></Lista>
//       </>
//     ) : (
//       "Sin elementos"
//     );

//   return (
//     <>
//       <Titulo></Titulo>
//       <Card titulo={"Hola como estas"}>
//         <CardBody titulo={"Hola Mundo"} texto={"Todo Bien"}></CardBody>
//       </Card>

//       {condicion}
//     </>
//   );
// }

// Funcioanmiento Boton
import Titulo from "./Titulo";
import Card from "./components/Card";
import CardBody from "./components/CardBody";
import Lista from "./components/Lista";
import Boton from "./components/Botones";
import { useState } from "react";

function App() {
  const Datos: string[] = ["Hola", "Como", "Bien"];

  const Datos_Validados: { Nombre: string; Apellido: string } = {
    Nombre: "Mateo",
    Apellido: "Espinosa",
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (Estado: boolean, Alerta: string) => {
    setIsLoading(!isLoading);

    if (Estado) {
      setTimeout(() => {
        setIsLoading((prev) => !prev); // alterna otra vez después de 2s
        alert(Alerta);
      }, 2000);
    }
  };

  // Creamos la funcion para segun los datos que nos manda desde este caso la lista ejecutar algun proceso
  const handleSelect = (elemento: string, index: number) => {
    console.log(elemento + " " + index);
  };

  const alerta = (elemento: string) => {
    alert(elemento);
  };

  const condicion =
    Datos.length !== 0 ? (
      <>
        <Lista data={Datos} onSelect={handleSelect}></Lista>
        <Lista data={Datos} onSelect={alerta}></Lista>
      </>
    ) : (
      "Sin elementos"
    );

  return (
    <>
      <Titulo></Titulo>
      <Card titulo={"Hola como estas"}>
        <CardBody titulo={"Hola Mundo"} texto={"Todo Bien"}></CardBody>
      </Card>

      {condicion}

      <Boton
        onClick={handleClick}
        isLoading={isLoading}
        datos={Datos_Validados}
      ></Boton>
    </>
  );
}

export default App;
