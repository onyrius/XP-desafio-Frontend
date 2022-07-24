/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBuyData } from '../redux/reducers/buySlice';
import { setDesabilitarVenda } from '../redux/reducers/isDisableSlice';

function BolsaAcoes() {
  const navigate = useNavigate();
  const ativosBolsa = useSelector(({ assets }) => assets.ativos);
  console.log(ativosBolsa);
  const dispatch = useDispatch();
  const comprar = ({ target: { id, value, name } }) => {
    console.log(id, value, name);
    const ativoParaComprar = ativosBolsa.find((acao) => acao.acao === name);
    dispatch(setBuyData(ativoParaComprar));
    dispatch(setDesabilitarVenda(true));
    navigate('/comercio');
  };
  const renderAtivos = ativosBolsa;
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
            renderAtivos.map((acao) => (
              <tr key={acao.id}>
                <td>{acao.acao}</td>
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
                    name={acao.acao}
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
