import { useState, ChangeEvent } from "react";
import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import "./index.css";

function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCPF = (e: ChangeEvent<unknown>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<unknown>) => {
    setPassword(e.target.value);
  };

  const handleAuth = () => {
    console.log({
      cpf,
      password,
    });
  };

  return (
    <main id="login">
      <img src={logoFullImage} alt="Cora" title="Cora" />
      <h1>Fazer Login</h1>
      <input id="cpf" placeholder="Insira seu CPF" onChange={handleChangeCPF} />
      <input
        id="password"
        placeholder="Digite sua senha"
        onChange={handleChangePassword}
      />
      <button onClick={handleAuth}>
        Continuar
        <img src={arrowRightImage} />
      </button>
    </main>
  );
}

export { Login };
