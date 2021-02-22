import styled from 'styled-components';

import color from '@styles/colors';
import font from '@styles/font';

import { Price as SPrice } from '../DetailsProduct/DetailsProduct.styles';

const Wrapper = styled.li`
  border-bottom: 1px solid ${color.gray.lighten};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  list-style-type: none;
  padding: 12px 2px;

  @media (min-width: 596px) {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    padding: 4px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 0.5fr 2fr 1fr;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 596px) {
    display: block;
  }

  img {
    border-radius: 4px;
    object-fit: contain;
    height: 216px;
    width: 216px;

    @media (min-width: 375px) {
      height: 260px;
      width: 260px;
    }

    @media (min-width: 596px) {
      height: 196px;
      width: 196px;
    }
  }
`;

const Content = styled.div`
  margin: 0 8px;

  @media (min-width: 596px) {
    margin: 0 16px;
  }

  h1 {
    color: ${color.black.lighten};
    margin: 0;
    font-size: ${font.size.xlarge};
    font-weight: ${font.weight.light};
  }
`;

const Price = styled(SPrice)`
  font-weight: ${font.weight.light};
  margin: 0;
  padding: 8px 0;
`;

const Locale = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: ${color.black.darken};
    margin: 16px auto;
  }
`;

export { Wrapper, Image, Content, Price, Locale };
