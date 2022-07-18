/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const nomeDoUsuario = useSelector(({ usuarioLogado: { nome } }) => nome);
  return (
    <header className="header">
      <h3 className="header-title">
        {`usuário: ${nomeDoUsuario}` }
      </h3>
    </header>
  );
}

export default Header;
