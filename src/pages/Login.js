/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail, setSenha } from '../redux/reducers/loginSlice';

function Login() {
  // const history = us;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: '',
    senha: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const enableButton = () => {
    if (userLogin.senha && userLogin.email) {
      return false;
    }
    return true;
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const { email, senha } = userLogin;
    dispatch(setEmail(email));
    dispatch(setSenha(senha));
    navigate('/acoes');
  };

  return (
    <div>
      <section className="login">
        <h1>InVista</h1>
        <form className="form-login">
          <input
            data-testid="input-email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Digite seu email"
            className="input-form"
          />
          <input
            type="password"
            data-testid="input-senha"
            id="senha"
            name="senha"
            onChange={handleChange}
            className="input-form"
          />
          <button
            type="submit"
            data-testid="btn-play"
            disabled={enableButton()}
            onClick={handleClick}
            className="button-login"
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
