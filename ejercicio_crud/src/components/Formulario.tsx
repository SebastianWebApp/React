import { useState, useEffect } from "react";
import { soloLetras } from "../utils/Validaciones";

type Props = {
  onSelect: (Nombre: string, Posicion?: number, Eliminar?: boolean) => void;
  nombre_seleccionado: string;
  posicion_seleccionada: number;
};

function Formulario(props: Props) {
  const { onSelect, nombre_seleccionado, posicion_seleccionada } = props;

  const [editar, setEditar] = useState(false);
  const [crear, setCrear] = useState(true);
  const [nombre, setNombre] = useState("");
  const [actualizar, setActualizar] = useState("");

  // Efecto para activar edición si hay un nombre y posición seleccionada
  useEffect(() => {
    if (nombre_seleccionado.trim() !== "" && posicion_seleccionada !== -1) {
      setEditar(true);
      setCrear(false);
      setNombre("");
      setActualizar(nombre_seleccionado);
    }
  }, [nombre_seleccionado, posicion_seleccionada]);

  const handleClick = (nombre: string) => {
    if (nombre.trim() !== "") {
      onSelect(nombre);
      setNombre("");
    } else {
      alert("Ingrese un nombre");
    }
  };

  const handleClick_Actualizar = (nombre: string, posicion: number) => {
    if (nombre.trim() !== "") {
      onSelect(nombre, posicion);
      setActualizar("");
      setEditar(false);
      setCrear(true);
    } else {
      alert("Ingrese un nombre");
    }
  };

  const handleNuevo = () => {
    onSelect("");
    setActualizar("");
    setEditar(false);
    setCrear(true);
  };

  const handleEliminar = (nombre: string, posicion: number) => {
    onSelect(nombre, posicion, true);
    setActualizar("");
    setEditar(false);
    setCrear(true);
  };

  const handleName = (nombre: string) => {
    if (soloLetras(nombre)) {
      setNombre(nombre);
    }
  };

  const handleActualizar = (nombre: string) => {
    if (soloLetras(nombre)) {
      setActualizar(nombre);
    }
  };

  return (
    <>
      {crear ? (
        <div className="input-group mb-3">
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
            Guardar Contacto
          </button>
        </div>
      ) : null}

      {editar ? (
        <div className="input-group" style={{ marginBottom: "10px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese un nombre"
            aria-label="Ingrese un nombre"
            value={actualizar}
            onChange={(e) => handleActualizar(e.target.value)}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => handleNuevo()}
          >
            Nuevo Contacto
          </button>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={() =>
              handleClick_Actualizar(actualizar, posicion_seleccionada)
            }
          >
            Actualizar
          </button>
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={() => handleEliminar(actualizar, posicion_seleccionada)}
          >
            Eliminar
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Formulario;
