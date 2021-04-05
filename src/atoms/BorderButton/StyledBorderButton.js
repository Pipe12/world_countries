import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBorderButton = styled(Link)`
  border: none;
  border-radius: 2px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  background-color: var(${({theme}) => theme.backgroundElement});
  color: var(${({theme}) => theme.text});
  padding: 10px 16px 10px 16px;
  text-decoration: none;
  box-shadow: 0px 2px 10px 0px var(${({ theme }) => theme.shadow});
`
