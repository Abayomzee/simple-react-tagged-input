import styled from 'styled-components';

export const Wrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  padding: 8px 15px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#e8e8e8')};
`;

/* Close button style */
export const CloseButton = styled.button`
  unset: all;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

/* Close button icon style */
export const Icon = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? color : '#c4c0c0')};
`;
