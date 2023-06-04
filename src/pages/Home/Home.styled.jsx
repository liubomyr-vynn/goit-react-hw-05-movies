import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
`;

export const HomeTitle = styled.h2`
  margin-bottom: 20px;
`;

export const HomeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;
