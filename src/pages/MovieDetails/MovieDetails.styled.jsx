import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 20px;
  margin-bottom: 20px;
`;

export const BackLinkInfo = styled.div`
  margin-right: auto;
  display: inline-block;

  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 8px 20px;
  border: 1px solid #42ecc2;
  line-height: 1.15;
  font-size: 16px;
  margin-left: 15px;

  &:hover {
    transition: all 0.1s ease;
    box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
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
