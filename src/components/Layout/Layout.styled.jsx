import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Header = styled.header`
  /* padding-top: 20px;
  padding-bottom: 20px;
  background-color: #b4b4b4;
  margin-bottom: 20px; */
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #858586ea;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
`;

export const HeaderList = styled.ul`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  margin-left: 40px;
`;

export const HeaderItem = styled.li`
  display: inline-block;
  width: 70px;
  color: white;
  text-align: center;
  border-radius: 3px;
  padding: 10px 0;
  &:active {
    background-color: #995618;
  }
  &:hover {
    background-color: #8b96f7;
  }
`;

// &:active {
//   border-bottom: 1px solid #50ec42;
// }
