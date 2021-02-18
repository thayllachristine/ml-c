import styled from 'styled-components';

const Wrapper = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
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
    font-weight: bold;
  }
`;

export { Wrapper, List, Item };
