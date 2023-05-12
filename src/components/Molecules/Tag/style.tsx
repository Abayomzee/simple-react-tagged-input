import styled, { keyframes } from 'styled-components';

// Animation
const TagAnimateIn = keyframes`
0% {
    opacity: 0;
    transform: translateX(5px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TagAnimateOut = keyframes`
0% {
    transform: translateX(0);
    opacity: 1;
  }
  95% {
    transform: translateX(5px);
    opacity: 0;
  }
  100% {
    transform: translateX(5px);
    opacity: 0;
    /* display: none; */
  }
`;
// End of  Animation

export const Wrapper = styled.div<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  gap: 3px;
  border-radius: 4px;
  padding: 4px 4px 4px 8px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#f3f3f3')};
  font-family: 'Poppins', sans-serif;
  user-select: none;

  &.animate-in {
    animation: ${TagAnimateIn} 0.3s ease;
  }

  &.animate-out {
    animation: ${TagAnimateOut} 0.3s ease;
  }

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
  transition: 0.3s;
  border-radius: 4px;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    background-color: #e7e7e7;
  }
`;

/* Close button icon style */
export const Icon = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? color : '#a6a6a6')};
  font-weight: 700;
  font-size: 11px;
  padding: 1px 3px 1px 2px;
`;
