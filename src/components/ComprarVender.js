/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { verificaAcao, verificaAcaoVender } from '../helpers';
import { setSaldo } from '../redux/reducers/loginSlice';

function ComprarVender() {
  const dispatch = useDispatch();
  const ativoEscolhido = useSelector(({ buy }) => buy.ativo);
  const desabilitar = useSelector(({ isDisable }) => isDisable);
  const ativosBolsa = useSelector(({ assets }) => assets.ativos);
  const saldoUsuario = useSelector(({ usuarioLogado }) => usuarioLogado.saldo);
  const [renderAtivo, setRenderAtivo] = useState({});
  const [quantidadeDigitada, setQuantidadeDigitada] = useState(0);

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setQuantidadeDigitada(value);
  };

  useEffect(() => {
    setRenderAtivo(ativoEscolhido);
  }, []);

  const vender = () => {
    verificaAcaoVender(
      ativoEscolhido,
      quantidadeDigitada,
      setRenderAtivo,
    );

    const saldoNovo = Number(saldoUsuario) + Number(quantidadeDigitada) * Number(renderAtivo.valor);
    dispatch(setSaldo(Number(saldoNovo)));
  };

  const comprar = () => {
    if (verificaAcao(
      ativosBolsa,
      ativoEscolhido,
      quantidadeDigitada,
      setRenderAtivo,
    )) return;
    const saldoNovo = Number(saldoUsuario) - (Number(quantidadeDigitada) * Number(renderAtivo.valor));
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
            <td>{renderAtivo.acao }</td>
            <td>{renderAtivo.qntdade}</td>
            <td>{renderAtivo.valor}</td>
          </tr>
        </tbody>
      </table>
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
    </div>
  );
}

export default ComprarVender;
