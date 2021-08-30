import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidenav from './Sidenav';
import {Container} from './style'

const DefaultLayout = ({children}) => {
  return (
    <Container>
       <Header/>
       <Sidenav/>
       <main>
         {children}
       </main>
       <Footer/>
    </Container>
  );
};

export default DefaultLayout;