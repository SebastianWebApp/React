type Props = {
  titulo: string;
  texto: string;
};

export function CardBody(props: Props) {
  const { titulo, texto } = props;

  return (
    <>
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{texto}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default CardBody;
