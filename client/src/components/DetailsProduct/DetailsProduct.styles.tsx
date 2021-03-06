import styled from 'styled-components';
import color from '@styles/colors';
import font from '@styles/font';

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  grid-template-columns: 2fr 1fr;

  @media (min-width: 596px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 4px;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 425px) {
    display: block;
    img {
      width: 264px;
    }
  }

  img {
    border-radius: 4px;
    object-fit: contain;
    width: 220px;
  }
`;

const Description = styled.div`
  display: none;

  @media (min-width: 596px) {
    display: block;
    margin-top: 24px;

    h2 {
      font-size: ${font.size.xlarge};
      font-weight: ${font.weight.regular};
      padding-bottom: 24px;
    }

    article {
      color: ${color.gray.regular};
      font-size: ${font.size.medium};
      font-weight: ${font.weight.light};

      font-size: ${font.size.large};
    }
  }
`;

const Infos = styled.div`
  @media (min-width: 596px) {
    margin: 0 16px;
    padding: 0 8px;
  }
`;

const Title = styled.h1`
  color: ${color.black.lighten};
  font-size: ${font.size.xxlarge};
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  color: ${color.black.darken};
  display: flex;
  font-size: ${font.size.small};
  margin: 16px 0 8px;

  p:first-child {
    text-transform: uppercase;

    &:after {
      content: '-';
      margin: 0 4px;
    }
  }
`;

const Price = styled.p`
  color: ${color.black.lighten};
  display: flex;
  font-size: ${font.size.xxxlarge};
  font-weight: ${font.weight.regular};
  list-style-type: none;
  margin-bottom: 32px;
  padding: 0;

  span {
    font-size: ${font.size.medium};
    margin-top: 2px;

    @media (min-width: 425px) {
      font-size: ${font.size.large};
      margin-top: 6px;
    }
  }

  @media (min-width: 425px) {
    font-size: ${font.size.xxxxlarge};
    font-weight: ${font.weight.regular};
  }
`;

const Button = styled.button`
  background-color: ${color.blue.lighten};
  border-color: transparent;
  border-radius: 4px;
  box-shadow: 0 0 0 0 ${color.white};
  color: ${color.white};
  cursor: pointer;
  font-weight: ${font.weight.bold};
  height: 42px;
  padding: 8px 16px;
  width: 100%;

  &:hover {
    border-color: transparent;
    color: ${color.white};
    outline: none;
  }

  &:focus {
    outline: 0;
  }

  &:active {
    background-color: ${color.blue.darken};
    border-color: transparent;
    color: ${color.white};
  }
`;

export { Wrapper, Image, Description, Infos, Title, Subtitle, Price, Button };
