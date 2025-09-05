type DatosPersona = {
  Nombre: string;
  Apellido: string;
};

type Props = {
  onClick: (Estado: boolean, Alerta: string) => void;
  isLoading: boolean;
  datos?: DatosPersona;
};

function Boton(props: Props) {
  const { onClick, isLoading, datos } = props;

  let tipo: string = "btn btn-primary";

  if (isLoading === true) {
    tipo = "btn btn-secondary";
  }

  const handleClick = () => {
    // Todo se devuelve de esa manera si es un JSON asi ${JSON.stringify(persona)}
    onClick?.(true, `${datos?.Nombre}`);
  };

  return (
    <button
      type="button"
      className={tipo}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading === true ? "Cargando" : "Guardar"}
    </button>
  );
}

export default Boton;
