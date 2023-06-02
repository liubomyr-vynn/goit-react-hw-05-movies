import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Container, Header, HeaderItem, HeaderList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderList>
            <HeaderItem>
              <NavLink to="/">Home</NavLink>
            </HeaderItem>
            <HeaderItem>
              <NavLink to="/movies">Movies</NavLink>
            </HeaderItem>
          </HeaderList>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
export default Layout;
