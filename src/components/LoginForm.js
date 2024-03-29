/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  setAtivosCliente, setEmail, setName, setSaldo, setSenha,
} from '../redux/reducers/loginSlice';
import { setUsersData } from '../redux/reducers/userSlice';
import { setAssetsData } from '../redux/reducers/assetsSlice';
import { usuarios, bolsa } from '../simulacros';
import { sucessLogin, wrongEmail } from '../helpers';

function LoginForm() {
  const usuariosStore = useSelector(({ usersData }) => usersData.usuarios);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAssetsData(bolsa));
    dispatch(setUsersData(usuarios));
  }, []);

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
    const FOUR = 4;

    if (userLogin.senha.length > FOUR
      && userLogin.email) {
      return false;
    }
    return true;
  };

  const handleClick = (event) => {
    event.preventDefault();
    const { email, senha } = userLogin;
    const verify = usuariosStore.find((user) => user.email === email);
    if (!verify) {
      wrongEmail();
    } else {
      const { nome, ativos, saldo } = verify;
      dispatch(setEmail(email));
      dispatch(setSenha(senha));
      dispatch(setName(nome));
      dispatch(setAtivosCliente(ativos));
      dispatch(setSaldo(saldo));
      navigate('/inicio');
      sucessLogin();
    }
  };

  return (
    <div>
      <Toaster />
      <section className="login">
        <h1>InVista</h1>
        <form className="form-login">
          <input
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Digite seu email"
            className="input-form"
          />
          <input
            type="password"
            id="senha"
            name="senha"
            onChange={handleChange}
            className="input-form"
          />
          <button
            type="submit"
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

export default LoginForm;
