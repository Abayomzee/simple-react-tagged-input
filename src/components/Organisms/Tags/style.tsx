import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;

  .tag-input {
    border: none;
    font-family: 'Poppins', sans-serif;
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
