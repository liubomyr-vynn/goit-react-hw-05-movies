import styled from 'styled-components';

export const MoviesContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MoviesForm = styled.form`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MoviesInput = styled.input`
  display: flex;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 8px 12px;
  border: 1px solid #42ecc2;
  line-height: 1.5;
  font-size: 16px;
  &:hover {
    transition: all 0.1s ease;
    box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
  }
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const MoviesButton = styled.button`
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
