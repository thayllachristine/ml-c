import styled, { keyframes } from 'styled-components';
import color from '@styles/colors';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  animation: ${rotate360} 1s linear infinite;
  background: transparent;
  border-bottom: 4px solid ${color.yellow};
  border-left: 4px solid ${color.black};
  border-radius: 50%;
  border-right: 4px solid ${color.yellow};
  border-top: 4px solid ${color.yellow};
  height: 24px;
  transform: translateZ(0);
  width: 24px;
`;

export { Wrapper };
