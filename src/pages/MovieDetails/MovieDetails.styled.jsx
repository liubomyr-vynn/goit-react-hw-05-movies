import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 20px;
  margin-bottom: 20px;
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
  background-color: #226822;
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
  max-width: 100px;
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
    background-color: #497949;
    color: #ffffff;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 30px;
  @media screen and (max-width: 700px) {
    margin-left: 0px;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const AdditionalList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
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

  &.active {
    background: #04111f;
    color: #ffffff;
  }
`;
