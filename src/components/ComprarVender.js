/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  atualizarAtivosBolsa, atulizarAtivosUsuario, verificaAcao, verificaAcaoVender,
} from '../helpers';
import { setAssetsData } from '../redux/reducers/assetsSlice';
import { setAtivosCliente, setSaldo } from '../redux/reducers/loginSlice';

function ComprarVender() {
  const dispatch = useDispatch();
  const ativoEscolhido = useSelector(({ buy }) => buy.ativo);
  const ativosDoUsuario = useSelector(({ usuarioLogado }) => usuarioLogado.ativos);
  const desabilitar = useSelector(({ isDisable }) => isDisable);
  const ativosBolsa = useSelector(({ assets }) => assets.ativos);
  const saldoUsuario = useSelector(({ usuarioLogado }) => usuarioLogado.saldo);
  const [renderAtivo, setRenderAtivo] = useState({});
  const [quantidadeDigitada, setQuantidadeDigitada] = useState(0);
  const handleChange = ({ target }) => {
    const { value } = target;
    setQuantidadeDigitada(value);
  };

  useEffect(() => {
    setRenderAtivo(ativoEscolhido);
  }, []);

  const vender = () => {
    if (verificaAcaoVender(
      ativoEscolhido,
      quantidadeDigitada,
      setRenderAtivo,
    )) return;

    const saldoNovo = Number(saldoUsuario) - (Number(quantidadeDigitada) * Number(renderAtivo.valor));

    const ativosBolsaAtualizados = atualizarAtivosBolsa(
      ativosBolsa,
      ativoEscolhido,
      quantidadeDigitada,
    );

    const ativosUsuarioAtualizados = atulizarAtivosUsuario(
      ativosDoUsuario,
      ativoEscolhido,
      quantidadeDigitada,
    );
    dispatch(setAssetsData(ativosBolsaAtualizados));
    dispatch(setAtivosCliente([...ativosUsuarioAtualizados]));
    dispatch(setSaldo(saldoNovo));
  };

  const comprar = () => {
    if (verificaAcao(
      ativosBolsa,
      ativoEscolhido,
      quantidadeDigitada,
      setRenderAtivo,
    )) return;
    const saldoNovo = Number(saldoUsuario) - (Number(quantidadeDigitada) * Number(renderAtivo.valor));

    const ativosBolsaAtualizados = atualizarAtivosBolsa(
      ativosBolsa,
      ativoEscolhido,
      quantidadeDigitada,
    );

    const ativosUsuarioAtualizados = atulizarAtivosUsuario(
      ativosDoUsuario,
      ativoEscolhido,
      quantidadeDigitada,
    );
    dispatch(setAssetsData(ativosBolsaAtualizados));
    dispatch(setAtivosCliente([...ativosUsuarioAtualizados]));
    dispatch(setSaldo(saldoNovo));
  };
  return (
    <div className="minhas-acoes">
      <Toaster />
      <h3 className="minhas-acoes-header">Minhas Ações</h3>
      <table border="1">
        <tbody border="1">
          <tr>
            <th>Ação</th>
            <th>Qntdade</th>
            <th>Valor</th>
          </tr>

          <tr>
            <td>{renderAtivo.acao}</td>
            { renderAtivo.qntdade < 0
              ? 0
              : <td>{renderAtivo.qntdade}</td>}
            <td>{renderAtivo.valor}</td>
          </tr>
        </tbody>
      </table>
      {
      renderAtivo.qntdade === 0
        ? ''
        : (
          <form className="form-comprar-vender">
            <button
              type="button"
              name="comprar"
              data-testid="btn-play"
              hidden={desabilitar.comprar}
              onClick={comprar}
              className="button-login"
            >
              Comprar
            </button>
            <input
              type="number"
              name="comprar"
              onChange={handleChange}
              hidden={desabilitar.comprar}
              placeholder="Informe a quantidade"
              className="input-form"
            />
            <button
              type="button"
              data-testid="btn-play"
              name="vender"
              hidden={desabilitar.vender}
              onClick={vender}
              className="button-login"
            >
              Vender
            </button>
            <input
              data-testid="input-vender"
              id="vender"
              type="number"
              name="vender"
              hidden={desabilitar.vender}
              placeholder="Informe a quantidade"
              className="input-form"
              onChange={handleChange}
            />

          </form>
        )
     }

    </div>
  );
}

export default ComprarVender;
