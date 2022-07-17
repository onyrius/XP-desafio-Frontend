/* eslint-disable no-console */
import React from 'react';
import { minhasAcoes } from '../simulacros/todasAcoes';

function ComprarVender() {
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

          {
            minhasAcoes.map((minhacao) => (
              <tr key={minhacao.id}>
                <td>{minhacao.acao }</td>
                <td>{minhacao.qntdade}</td>
                <td>{minhacao.valor}</td>
              </tr>
            ))

          }
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
          disabled={false}
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
