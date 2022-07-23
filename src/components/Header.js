/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { nome, saldo } = useSelector(({ usuarioLogado }) => usuarioLogado);
  // console.log(nomeDoUsuario);
  return (
    <header className="header">
      <h3 className="header-title">
        {`usuário: ${nome}` }
      </h3>
      <h4 className="header-title">
        {`saldo: ${saldo}` }
      </h4>
    </header>
  );
}

export default Header;
