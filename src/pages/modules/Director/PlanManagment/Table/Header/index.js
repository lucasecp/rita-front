import React from 'react';
import { Container, ArrowUp, ArrowDown, Content } from './styles';

const Header = () => {
  return (
    <Container>
         <div>

          <Content >
            <h5> Ativação </h5>
            <div >
              <ArrowUp />
              <ArrowDown  />
            </div>
          </Content>

          <Content >
            <h5> Término </h5>
            <div >
              <ArrowUp />
              <ArrowDown  />
            </div>
          </Content>

          <Content >
            <h5> Código </h5>
            <div >
              <ArrowUp />
              <ArrowDown  />
            </div>
          </Content>

          <Content >
            <h5> Nome </h5>
            <div >
              <ArrowUp />
              <ArrowDown  />
            </div>
          </Content>

          <Content >
            <h5> Status </h5>
            <div >
              <ArrowUp />
              <ArrowDown  />
            </div>
          </Content>

          <Content >
            <h5> Ações </h5>
            <div >
              <ArrowUp />
              <ArrowDown  />
            </div>
          </Content>

      </div>
    </Container>
  );
};


export default Header;