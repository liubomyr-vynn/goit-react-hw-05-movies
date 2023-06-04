import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Header,
  HeaderItem,
  HeaderList,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderList>
            <HeaderItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </HeaderItem>
            <HeaderItem>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </HeaderItem>
          </HeaderList>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
export default Layout;
