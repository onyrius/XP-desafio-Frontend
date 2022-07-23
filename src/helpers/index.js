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
    console.log('dentro do primeiro if');
    digiteUmValorValido();
  }
  if (Number(quantidadeDigitada) > +ativoEscolhido.qntdade) {
    console.log('dentro do segundo if');

    digiteUmValorValido();
  }
  if (Number(quantidadeDigitada) <= +ativoEscolhido.qntdade) {
    console.log(+ativoEscolhido.qntdade);
    setRenderAtivo((prev) => ({
      ...prev,
      qntdade: Number(prev.qntdade) - Number(quantidadeDigitada),
    }));
    return false;
  }
  return true;
};
