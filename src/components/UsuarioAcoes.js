/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAssetsData } from '../redux/reducers/assetsSlice';
import { setBuyData } from '../redux/reducers/buySlice';
import { setUsersData } from '../redux/reducers/userSlice';
import { setDesabilitarCompra, setDesabilitarVenda } from '../redux/reducers/isDisableSlice';
import { bolsa, usuarios } from '../simulacros';

function MinhasAcoes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAssetsData(bolsa));
    dispatch(setUsersData(usuarios));
  }, []);

  const ativosDoUsuario = useSelector(({ usuarioLogado }) => usuarioLogado.ativos);

  const comercializar = ({ target }) => {
    const ativosComercializar = ativosDoUsuario.find((acao) => acao.id === Number(target.id));
    dispatch(setBuyData(ativosComercializar));
    if (target.value === 'comprar') {
      dispatch(setDesabilitarVenda(true));
    }
    if (target.value === 'vender') {
      dispatch(setDesabilitarCompra(true));
    }
    navigate('/comercio');
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
                    onClick={comercializar}
                    value="comprar"
                  />
                  <input
                    type="button"
                    id={ativoDoUsuario.id}
                    onClick={comercializar}
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
