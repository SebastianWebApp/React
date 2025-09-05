import { useEffect, useState } from "react";
import { soloLetras } from "./Validaciones";

type Props = {
  data: string[];
  onFilter: (lista: string[]) => void;
};

function Filtro(props: Props) {
  const { data, onFilter } = props;

  const [nombre, setNombre] = useState("");

  // Me detecta si existe un cambio en la data y actua de forma automatica
  useEffect(() => {
    setNombre("");
  }, [data]);

  const handleClick = (nombre: string) => {
    const Filtro = data.filter((elemento) =>
      elemento.toLowerCase().includes(nombre.toLowerCase())
    );

    onFilter(Filtro);
  };

  const handleName = (nombre: string) => {
    if (soloLetras(nombre)) {
      setNombre(nombre);
    }
  };

  return (
    <>
      <div className="input-group mb-3" style={{ marginTop: "40px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese un nombre"
          aria-label="Ingrese un nombre"
          aria-describedby="button-addon2"
          value={nombre}
          onChange={(e) => handleName(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={() => handleClick(nombre)}
        >
          Filtrar Contacto
        </button>
      </div>
    </>
  );
}

export default Filtro;
