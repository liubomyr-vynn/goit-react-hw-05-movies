import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  min-height: 40px;

  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: #858586ea;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
`;

export const HeaderList = styled.ul`
  list-style-type: none;

  overflow: hidden;
`;

export const HeaderItem = styled.li`
  display: inline-block;
  margin-right: 5px;

  color: white;
  text-align: center;
  border-radius: 3px;
  padding: 10px 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
  background-color: #0a66c2;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;

  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  width: 100px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

  &:hover,
  &:focus {
    background-color: #0f2644;
    color: #ffffff;
  }

  &:active {
    background: #04111f;
    color: rgb(255, 255, 255, 0.7);
  }
`;
