/* eslint-disable consistent-return */
import toast from 'react-hot-toast';

export const wrongEmail = () => toast.error(
  'Email inválido!',
  {
    icon: '⛔',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  },
);
export const sucessLogin = () => toast.success(
  'Olá!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  },
);

export const digiteUmValorValido = () => toast(
  'Digite um valor válido',
  {
    icon: '⛔',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  },
);

export const saldoInsuficiente = () => toast(
  'saldo insuficiente',
  {
    icon: '⛔',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  },
);

export const verificaAcao = (
  ativosBolsa,
  ativoEscolhido,
  quantidadeDigitada,
  setRenderAtivo,
) => {
  const ativoEscolhidoBolsa = ativosBolsa
    .find((ativoBolsa) => ativoBolsa.acao === ativoEscolhido.acao);

  if (!quantidadeDigitada.length || !ativoEscolhido) {
    digiteUmValorValido();
  }
  if (+quantidadeDigitada > +ativoEscolhidoBolsa.qntdade) {
    digiteUmValorValido();
  }
  if (+quantidadeDigitada <= +ativoEscolhidoBolsa.qntdade) {
    setRenderAtivo((prev) => ({
      ...prev,
      qntdade: Number(prev.qntdade) + Number(quantidadeDigitada),
    }));
    return false;
  }
  return true;
};

export const verificaAcaoVender = (
  ativoEscolhido,
  quantidadeDigitada,
  setRenderAtivo,
) => {
  if (!quantidadeDigitada.length || !ativoEscolhido.qntdade) {
    digiteUmValorValido();
  }
  if (Number(quantidadeDigitada) > Number(ativoEscolhido.qntdade)) {
    return digiteUmValorValido();
  }
  if (Number(quantidadeDigitada) <= +ativoEscolhido.qntdade) {
    setRenderAtivo((prev) => ({
      ...prev,
      qntdade: Number(prev.qntdade) - Number(quantidadeDigitada),
    }));
    return false;
  }
  return true;
};

export const atualizarAtivosBolsa = (
  ativosBolsa,
  ativoEscolhido,
  quantidadeDigitada,
) => {
  const ativosDaBolsaParaAtualizar = ativosBolsa
    .filter((ativoBolsa) => ativoBolsa.acao !== ativoEscolhido.acao);
  const ativoBolsaAtualizado = {
    ...ativoEscolhido,
    qntdade: ativoEscolhido.qntdade - Number(quantidadeDigitada),
  };
  const ativosBolsaAtualizados = [...ativosDaBolsaParaAtualizar, ativoBolsaAtualizado];
  return ativosBolsaAtualizados;
};

export const atulizarAtivosUsuario = (
  ativosDoUsuario,
  ativoEscolhido,
  quantidadeDigitada,
) => {
  const ativoDoUsuárioParaAtualizar = ativosDoUsuario
    .find((ativoDoUsuario) => ativoDoUsuario.acao === ativoEscolhido.acao);
  if (!ativoDoUsuárioParaAtualizar) {
    const novoAtivoEscolhidoAtualizado = {
      ...ativoEscolhido,
      qntdade: quantidadeDigitada,
    };
    const ativosUsuarioAtualizados = [...ativosDoUsuario, novoAtivoEscolhidoAtualizado];
    return ativosUsuarioAtualizados; // retorna ativos com um novo ativo na carteira
  }
  const ativoUsuarioAtualizado = {
    ...ativoDoUsuárioParaAtualizar,
    qntdade: ativoDoUsuárioParaAtualizar.qntdade + Number(quantidadeDigitada),
  }; // atualizando ativo já existente na carteira que usuario comprou

  const ativosDoUsuarioFiltrado = ativosDoUsuario
    .filter((ativoDoUsuario) => ativoDoUsuario.acao !== ativoEscolhido.acao);
  // filtra ativos não atualizados;

  const ativosUsuarioAtualizados = [...ativosDoUsuarioFiltrado, ativoUsuarioAtualizado];
  return ativosUsuarioAtualizados; // adiciona o ativo atualizado
};
