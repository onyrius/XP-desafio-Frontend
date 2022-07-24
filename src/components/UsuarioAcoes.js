/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBuyData } from '../redux/reducers/buySlice';
import { setUsersData } from '../redux/reducers/userSlice';
import { setDesabilitarCompra, setDesabilitarVenda } from '../redux/reducers/isDisableSlice';
import { usuarios } from '../simulacros';

function UsuarioAcoes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsersData(usuarios));
  }, []);

  const ativosDoUsuario = useSelector(({ usuarioLogado }) => usuarioLogado.ativos);

  const comercializar = ({ target }) => {
    const { value, name, id } = target;
    console.log('ativosDoUsuario', ativosDoUsuario, 'name', name, id);
    const ativosComercializar = ativosDoUsuario.find((acao) => acao.acao === target.name);
    console.log(ativosComercializar);
    dispatch(setBuyData(ativosComercializar));
    if (value === 'comprar') {
      dispatch(setDesabilitarVenda(true));
    }
    if (value === 'vender') {
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
              <tr key={ativoDoUsuario.acao}>
                <td>{ativoDoUsuario.acao}</td>
                <td>{ativoDoUsuario.qntdade}</td>
                <td>{ativoDoUsuario.valor}</td>
                <td
                  id={ativoDoUsuario.acao}
                  button={ativoDoUsuario.acao}
                >
                  <input
                    type="button"
                    id={ativoDoUsuario.acao}
                    onClick={comercializar}
                    value="comprar"
                    name={ativoDoUsuario.acao}
                  />
                  <input
                    type="button"
                    id={ativoDoUsuario.acao}
                    onClick={comercializar}
                    value="vender"
                    name={ativoDoUsuario.acao}

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

export default UsuarioAcoes;
