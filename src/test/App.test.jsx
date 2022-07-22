import { render, screen } from '@testing-library/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux-hooks/redux.hooks';
import App from '../App';
import { testUseAppSector } from './test-UseAppSelector';
import Login from '../pages/Login';
import renderWithRoutesAndRedux from './renderWithRoutesAndRedux';
//jest.spyOn(object, methodName).mockImplementation(() => customImplementation)

jest.mock('../redux-hooks/redux.hooks');


describe('App', () => {

  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSector)
  } )
  it('verifica se renderiza corretamente o Login', () => {
    const retorno =  renderWithRoutesAndRedux(render(<Login />));
    console.log(retorno);
    const loginText = screen.getByText(/invista/i);
    expect(loginText).toBeInTheDocument();
  });
})

