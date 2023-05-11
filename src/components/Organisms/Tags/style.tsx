import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;

  .tag-input {
    border: none;
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
