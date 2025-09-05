import { useState } from "react";
import { soloLetras, solopassword } from "../utils/Validaciones";

const containerStyle = {
  width: "50%",
  margin: "20px",
};

function Formulario() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (valor: string) => {
    if (soloLetras(valor)) {
      setName(valor);
    }
  };

  const handleChange_Password = (valor: string) => {
    if (solopassword(valor)) {
      setPassword(valor);
    }
  };

  const handleClick = (Name: string, Password: string) => {
    alert(`Nombre: ${Name} -- Contaseña: ${Password}`);
  };

  return (
    <div style={containerStyle}>
      <label htmlFor="inputName" className="form-label">
        Name
      </label>
      <input
        type="text"
        id="inputName"
        className="form-control"
        aria-describedby="passwordHelpBlock"
        value={name}
        onChange={(e) => handleChange(e.target.value)}
      />
      <label htmlFor="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
        value={password}
        onChange={(e) => handleChange_Password(e.target.value)}
      />
      <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div>

      <button
        type="button"
        className="btn btn-primary"
        style={{ marginTop: "10px" }}
        onClick={() => handleClick(name, password)}
      >
        Validar
      </button>
    </div>
  );
}

export default Formulario;
