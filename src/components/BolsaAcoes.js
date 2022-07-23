/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBuyData } from '../redux/reducers/buySlice';
import { bolsa } from '../simulacros';

function BolsaAcoes() {
  const navigate = useNavigate();
  const acoesBolsa = useSelector(({ assets }) => assets.ativos);
  const dispatch = useDispatch();

  const comprar = ({ target: { id } }) => {
    const ativoParaComprar = acoesBolsa.find((acao) => acao.id === +id);
    dispatch(setBuyData(ativoParaComprar));
    navigate('/comercio');
  };

  return (
    <div className="minhas-acoes">
      <h3 className="minhas-acoes-header">Ações da Bolsa</h3>
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
