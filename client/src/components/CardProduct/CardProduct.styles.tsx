import styled from 'styled-components';

import color from '../../styles/colors';
import font from '../../styles/font';

import { Price as SPrice } from '../DetailsProduct/DetailsProduct.styles';

const Wrapper = styled.li`
  cursor: pointer;
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr;
  padding: 4px;

  &:not(:last-child) {
    border-bottom: 1px solid ${color.gray.lighten};
  }
`;

const Image = styled.div`
  img {
    border-radius: 4px;
    height: 196px;
    object-fit: contain;
    width: 196px;
  }
`;

const Content = styled.div`
  margin: 0 16px;

  h1 {
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
  color: ${color.black.darken};
  margin: 16px auto;
`;

export { Wrapper, Image, Content, Price, Locale };
