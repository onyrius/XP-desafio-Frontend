/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { minhasAcoes } from '../simulacros/todasAcoes';

function MinhasAcoes() {
  const navigate = useNavigate();

  const vender = ({ target: { id, value } }) => {
    navigate('/comercio');
    console.log(id, value);
  };
  const comprar = ({ target: { id } }) => {
    navigate('/comercio');
    console.log(id);
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
            <th>Negociar</th>
          </tr>

          {
            minhasAcoes.map((minhacao) => (
              <tr key={minhacao.id}>
                <td>{minhacao.acao }</td>
                <td>{minhacao.qntdade}</td>
                <td>{minhacao.valor}</td>
                <td
                  id={minhacao.id}
                  button={minhacao.id}
                >
                  <input
                    type="button"
                    id={minhacao.id}
                    onClick={comprar}
                    value="comprar"
                  />
                  <input
                    type="button"
                    id={minhacao.id}
                    onClick={vender}
                    value="vender"
                  />
                </td>
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
  );
}

export default MinhasAcoes;
