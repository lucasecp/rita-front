import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './style';

const Sidenav = () => {
  return (
    <Container>
      <nav>
       <Link  to="/definir-senha">Definir senha</Link>
        <Link to="/cadastro-cartao-sabin">Cartão Sabin</Link>
        <Link to="/cadastro-cliente-cartao-sabin-saude">
          cadastro cliente cartao sabin saude
        </Link>
        <Link to="/teste">Teste de Componentes</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </Container>
  );
};

export default Sidenav;