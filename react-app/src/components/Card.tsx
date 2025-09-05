import type { ReactNode } from "react";

type Props = {
  titulo?: string;
  children: ReactNode;
};

//Con el ? le decimos que ese elemento es opcional seria que puede o no colocarle
// ReactNode es para pasarle elementos no variables

function Card({ titulo, children }: Props) {
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <h5 className="card-header">{titulo}</h5>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
