import styled from 'styled-components';

export const Wrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#e8e8e8')};
  font-family: 'Poppins', sans-serif;

  .tag-name {
    font-size: 11px;
  }
`;

/* Close button style */
export const CloseButton = styled.button`
  display: grid;
  place-items: center;
  cursor: pointer;
  border: none;
  font-family: inherit;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

/* Close button icon style */
export const Icon = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? color : '#a6a6a6')};
  font-weight: 700;
  font-size: 11px;
  padding: 1px 2px;
`;
