/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBuyData } from '../redux/reducers/buySlice';
import { bolsa } from '../simulacros';

function BolsaAcoes() {
//  const selector = useSelector((state) => console.log(state));

  const navigate = useNavigate();
  const acoesCliente = useSelector(({ usersData }) => usersData.usuarios);
  const dispatch = useDispatch();

  const vender = ({ target: { id, value } }) => {
    navigate('/comercio');
    console.log(id, value);
  };
  const comprar = ({ target: { id } }) => {
    const ativoParaComprar = acoesCliente.find((acao) => acao.id === +id);
    dispatch(setBuyData(ativoParaComprar));
    navigate('/comercio');
    // console.log('ATIVO MINHA ACOES', ativoParaComprar);
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
                  <input
                    type="button"
                    id={acao.id}
                    onClick={vender}
                    className=""
                    value="vender"
                    disabled
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
