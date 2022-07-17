/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bolsa } from '../simulacros/todasAcoes';

function BolsaAcoes() {
  const selector = useSelector((state) => console.log(state));
  console.log('selector', selector, bolsa);

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
      <h3 className="minhas-acoes-header">Ações</h3>
      <table border="1">
        <tbody border="1">
          <tr>
            <th>Ação</th>
            <th>Qntdade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
          {
            bolsa.map((acao) => (
              <tr key={acao.id}>
                <td>{acao.acao }</td>
                <td>{acao.qntdade}</td>
                <td>{acao.valor}</td>
                <td
                  id={acao.id}
                  button={acao.id}
                >
                  <input
                    type="button"
                    id={acao.id}
                    onClick={comprar}
                    className=""
                    value="comprar"
                  />
                  <input
                    type="button"
                    id={acao.id}
                    onClick={vender}
                    className=""
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

export default BolsaAcoes;
