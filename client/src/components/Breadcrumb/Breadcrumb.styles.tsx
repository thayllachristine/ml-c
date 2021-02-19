import styled from 'styled-components';

import color from '../../styles/colors';
import font from '../../styles/font';

const Wrapper = styled.div`
  color: ${color.black.darken};
  font-family: 'Roboto', sans-serif;
  font-size: ${font.size.medium};
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  margin-bottom: 16px;
`;

const Item = styled.li`
  &:not(:last-child) {
    &:after {
      content: '>';
      margin: 0 4px;
    }
  }

  &:last-child {
    font-weight: ${font.weight.bold};
  }
`;

export { Wrapper, List, Item };
