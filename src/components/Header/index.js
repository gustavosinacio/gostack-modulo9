import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="HeaderLogo" height={50} />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Usuario logado</strong>
              <Link to="/profile">MeuPerfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="UserAvatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
