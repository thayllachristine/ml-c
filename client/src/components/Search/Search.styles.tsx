import styled from 'styled-components';
import color from '../../styles/colors';
import font from '../../styles/font';

const Wrapper = styled.nav`
  background-color: ${color.yellow};
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  width: 80%;
`;

const Logo = styled.img`
  margin-right: 16px;
  width: 50px;
`;

const Input = styled.input`
  background-color: ${color.white};
  border-radius: 4px 0 0 4px;
  border: none;
  color: ${color.gray.darken};
  font-size: ${font.size.medium};
  padding: 8px 12px;
  width: 100%;

  &:active,
  &:focus {
    border: none;
    outline: none;
  }
`;

const Icon = styled.div`
  background-color: ${color.gray.lighten};
  border-radius: 0 4px 4px 0;
  padding: 8px;

  img {
    height: 16px;
  }
`;

export { Wrapper, Content, Logo, Input, Icon };
