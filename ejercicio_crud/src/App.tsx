import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Filtro from "./utils/Filtro";

function App() {
  const [lista_Nombres, setLista] = useState<string[]>([]);
  const [nombre_Seleccionado, setNombre_Seleccionado] = useState("");
  const [posicion_Seleccionado, setPosicion_Seleccionado] = useState(-1);
  const [filtro, setFiltro] = useState<string[]>([]);

  useEffect(() => {
    // Sincroniza las listas de forma automática
    setFiltro(lista_Nombres);
  }, [lista_Nombres]);

  const Usuario_Creado = (
    nombre: string,
    posicion?: number,
    eliminar?: boolean
  ) => {
    if (posicion === undefined) {
      if (nombre !== "") {
        setLista([...lista_Nombres, nombre]);
      }
    } else {
      if (eliminar) {
        // Eliminar el elemento en la posición indicada
        const nuevaLista = [...lista_Nombres];
        nuevaLista.splice(posicion, 1); // elimina 1 elemento en el índice 'posicion'
        setLista(nuevaLista);
      } else {
        // Hay posición: reemplazamos el elemento en ese índice
        const nuevaLista = [...lista_Nombres];
        nuevaLista[posicion] = nombre;
        setLista(nuevaLista);
      }
    }

    setNombre_Seleccionado("");
    setPosicion_Seleccionado(-1);
  };

  const Leer_Usuario = (nombre: string, index: number) => {
    setNombre_Seleccionado(nombre);
    setPosicion_Seleccionado(index);
  };

  const Lista_Filtrada = (lista: string[]) => {
    setFiltro(lista);
  };

  return (
    <div>
      <Formulario
        onSelect={Usuario_Creado}
        nombre_seleccionado={nombre_Seleccionado}
        posicion_seleccionada={posicion_Seleccionado}
      ></Formulario>

      <Filtro data={lista_Nombres} onFilter={Lista_Filtrada}></Filtro>

      <Lista
        data={lista_Nombres}
        onSelect={Leer_Usuario}
        posicion={posicion_Seleccionado}
        filtro={filtro}
      ></Lista>
    </div>
  );
}

export default App;
