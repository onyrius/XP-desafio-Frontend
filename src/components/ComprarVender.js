/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function ComprarVender() {
  const ativoEscolhido = useSelector(({ buy }) => buy.ativo);
  const [ativoParaComprar, setAtivoParaComprar] = useState({});

  // console.log(ativoParaComprar);
  useEffect(() => {
    setAtivoParaComprar(ativoEscolhido);
  }, []);

  const comprar = () => {
    console.log('comprei');
  };
  const vender = () => {
    console.log('vendi');
  };
  return (
    <div className="minhas-acoes">
      <h3 className="minhas-acoes-header">Minhas Ações</h3>
      <table border="1">
        <tbody border="1">
          <tr>
            <th>Ação</th>
            <th>Qntdade</th>
            <th>Valor</th>
          </tr>

          <tr>
            <td>{ativoParaComprar.acao }</td>
            <td>{ativoParaComprar.qntdade}</td>
            <td>{ativoParaComprar.valor}</td>
          </tr>
        </tbody>
      </table>
      <form className="form-comprar-vender">
        <button
          type="submit"
          data-testid="btn-play"
          disabled={false}
          onClick={comprar}
          className="button-login"
        >
          Comprar
        </button>
        <input
          id="comprar"
          name="comprar"
          onChange={comprar}
          placeholder="Informe o valor"
          className="input-form"
        />
        <button
          type="submit"
          data-testid="btn-play"
          disabled
          onClick={vender}
          className="button-login"
        >
          Vender
        </button>

        <input
          data-testid="input-vender"
          id="vender"
          name="vender"
          onChange={vender}
          className="input-form"
        />

      </form>
    </div>
  );
}

export default ComprarVender;
