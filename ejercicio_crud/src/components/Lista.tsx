import { useState, useEffect } from "react";

type Props = {
  data: string[];

  onSelect: (nombre: string, index: number) => void;

  posicion: number;

  filtro: string[];
};

function Lista(props: Props) {
  const { data, onSelect, posicion, filtro } = props;

  const [index, setIndex] = useState(-1);

  // Efecto para activar edición si hay un nombre y posición seleccionada
  useEffect(() => {
    setIndex(posicion);
  }, [posicion]);

  const handleSelect = (elemento: string, i: number) => {
    setIndex(i);
    onSelect(elemento, i);
  };

  return (
    <>
      <ul className="list-group">
        {data.map((elementos, i) =>
          filtro.includes(elementos) ? (
            <li
              key={`${elementos}-${i}`}
              onClick={() => handleSelect(elementos, i)}
              className={
                index === i ? `list-group-item active` : `list-group-item`
              }
            >
              {elementos}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
}

export default Lista;
