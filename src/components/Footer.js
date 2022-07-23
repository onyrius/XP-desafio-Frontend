/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setDesabilitarCompra, setDesabilitarVenda } from '../redux/reducers/isDisableSlice';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // let path = '';
  // switch (location.pathname) {
  //   case '/inicio': path = 'perfil';
  //     break;
  //   default: path = 'Inicio';
  //     break;
  // }

  let path2 = '';
  switch (location.pathname) {
    case '/inicio': path2 = 'Depositar / Retirar';
      break;
    default: path2 = 'Inicio';
      break;
  }
  const redirecionar = () => {
    let link = '';
    switch (location.pathname) {
      case '/inicio': link = '/saldo';
        break;
      default: link = '/inicio';
        break;
    }
    dispatch(setDesabilitarCompra(false));
    dispatch(setDesabilitarVenda(false));

    navigate(link);
  };
  return (
    <div className="container-footer">
      {/* <button
        className="footer"
        type="button"
        onClick={redirecionar}
      >
        {path}
      </button> */}
      <button
        className="footer"
        type="button"
        onClick={redirecionar}
      >
        {path2}
      </button>
    </div>
  );
}

export default Footer;
