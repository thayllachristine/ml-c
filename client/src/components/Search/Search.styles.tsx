import styled from 'styled-components';
import color from '../../styles/colors';

const Navbar = styled.nav`
  background-color: ${color.yellow};
  column-gap: 10px;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  justify-content: space-around;
  padding: 10px;
  width: 100%;

  div {
    align-items: center;
    display: flex;
  }
`;

const Logo = styled.img`
  flex: 1;
  justify-self: self-end;
  margin: 0 16px;
  width: 50px;
`;

const Input = styled.input`
  background-color: ${color.white};
  border-radius: 4px 0 0 4px;
  border: none;
  color: ${color.gray.darken};
  font-size: 16px;
  padding: 8px 12px;
  width: 80%;

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

export { Navbar, Logo, Input, Icon };
