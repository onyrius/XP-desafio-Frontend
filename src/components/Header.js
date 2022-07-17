/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector(({ login: { email } }) => email);
  return (
    <header className="header">
      <h3 className="header-title">
        {`usuário: ${user}` }
      </h3>
    </header>
  );
}

export default Header;
