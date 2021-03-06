import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Flexbox } from './Flexbox';

export const Container = styled(Flexbox).attrs(
  props => ({
    palette: useSelector(state => state.theme.palette) || props.palette,
  })
)`
  align-items: center;
  background-color: ${({ palette }) => palette.body};
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  min-height: 500px;
  width: 100%;
`;
