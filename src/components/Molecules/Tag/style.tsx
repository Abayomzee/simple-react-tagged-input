import styled from 'styled-components';

export const Wrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  gap: 1px;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#f3f3f3')};
  font-family: 'Poppins', sans-serif;
  user-select: none;

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
  background-color: transparent;

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
