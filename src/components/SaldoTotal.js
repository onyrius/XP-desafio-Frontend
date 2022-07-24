/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSaldo } from '../redux/reducers/loginSlice';

function SaldoTotal() {
  const { saldo } = useSelector(({ usuarioLogado }) => (usuarioLogado));
  const dispatch = useDispatch();
  const [userState, setUserState] = useState({
    depositar: 0,
    retirar: 0,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userState);
  };

  const depositar = (event) => {
    event.preventDefault();
    const saldoDepoisDeposito = Number(saldo) + Number(userState.depositar);
    dispatch(setSaldo(saldoDepoisDeposito));
  };
  const retirar = (event) => {
    event.preventDefault();
    const saldoDepoisDeposito = Number(saldo) - Number(userState.retirar);
    dispatch(setSaldo(saldoDepoisDeposito));
  };

  return (
    <section>
      <form>
        <div className="container-button-input">
          <button
            type="submit"
            disabled={false}
            onClick={depositar}
          >
            depositar
          </button>
          <input
            id="depositar"
            type="number"
            name="depositar"
            onChange={handleChange}
            placeholder="Digite o valor para depositar"
          />
        </div>
        <div className="container-button-input">
          <button
            type="submit"
            disabled={false}
            onClick={retirar}
          >
            retirar
          </button>
          <input
            id="retirar"
            type="number"
            name="retirar"
            onChange={handleChange}
            placeholder="Digite o valor para retirar"
          />
        </div>
      </form>
    </section>
  );
}

export default SaldoTotal;
