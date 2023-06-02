import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: gray;
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const HeaderItem = styled.li`
  display: inline-block;
  width: 70px;
  color: white;
  text-align: center;
  padding: 10px 0;
  &:active {
    background-color: #121212;
  }
  &:hover {
    background-color: #333333;
  }
`;
