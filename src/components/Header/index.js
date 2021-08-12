import React from 'react';
import {HeaderLayout} from './style';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
         <Link to='/definir-senha'>Definir senha</Link>
         <Link to='/cartao-sabin'>Cartão Sabin</Link>
      </nav>
    </HeaderLayout>
  );
};

export default Header;
