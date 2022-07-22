/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAssetsData } from '../redux/reducers/assetsSlice';
import { setBuyData } from '../redux/reducers/buySlice';
import { setUsersData } from '../redux/reducers/userSlice';
import { bolsa, usuarios } from '../simulacros';

function MinhasAcoes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAssetsData(bolsa));
    dispatch(setUsersData(usuarios));
  }, []);

  const ativosDoUsuario = useSelector(({ usuarioLogado }) => usuarioLogado.ativos);
  console.log(ativosDoUsuario);
  const vender = ({ target: { id, value } }) => {
    navigate('/comercio');
    console.log(id, value);
  };
  const comprar = ({ target: { id } }) => {
    const ativoParaComprar = ativosDoUsuario.find((acao) => acao.id === +id);

    dispatch(setBuyData(ativoParaComprar));
    navigate('/comercio');
    // console.log('ATIVO MINHA ACOES', ativoParaComprar);
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
            ativosDoUsuario.map((ativoDoUsuario) => (
              <tr key={ativoDoUsuario.id}>
                <td>{ativoDoUsuario.acao }</td>
                <td>{ativoDoUsuario.qntdade}</td>
                <td>{ativoDoUsuario.valor}</td>
                <td
                  id={ativoDoUsuario.id}
                  button={ativoDoUsuario.id}
                >
                  <input
                    type="button"
                    id={ativoDoUsuario.id}
                    onClick={comprar}
                    value="comprar"
                  />
                  <input
                    type="button"
                    id={ativoDoUsuario.id}
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
