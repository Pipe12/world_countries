import styled from 'styled-components';
import { BsMoon, BsSun } from 'react-icons/bs';

export const StyledModeCTA = styled.button`
  background-color: transparent;
  border: none;
  color: var(${({ theme }) => theme.text});
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;

  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
`

export const StyledBsMoon = styled(BsMoon)`
  margin-right: 8px;

  @media only screen and (min-width: 992px) {
    font-size: 16px;
  }
`
  
export const StyledBsSun = styled(BsSun)`
  margin-right: 8px;
  
  @media only screen and (min-width: 992px) {
    margin-right: 12px;
  }
`
