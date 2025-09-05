import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string, index: number) => void; //Esto dice que no va a esperar retornar nada y le ponemos que es opcional
};

function Lista(props: Props) {
  const { data, onSelect } = props;

  // En este caso cuando nosotros queremos colocar lo que son variables para que almacenen posicion se debe colocar de esa forma
  // Esto permite tener estados independientes
  const [index, setIndex] = useState(0);

  const handleClick = (i: number, elemento: string) => {
    setIndex(i);

    // Con esto le decimos que puede o no recibir una función para ejecutar
    // Estamos devolviendo el nombre del elemento
    onSelect?.(elemento, i);
  };

  return (
    <ul
      className="list-group"
      style={{
        width: "300px",
        margin: "20px",
      }}
    >
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}
export default Lista;
