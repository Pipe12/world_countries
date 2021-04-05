import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

export const StyledBackButton = styled.button`
  background-color: var(${({theme}) => theme.backgroundElement});
  color: var(${({theme}) => theme.text});
  font-family: inherit;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px 24px 10px 24px;
  box-shadow: 0px 2px 10px 0px var(${({ theme }) => theme.shadow});

  @media only screen and (min-width: 992px) {
    font-size: 16px;
    border-radius: 2px;
    padding: 14px 40px 14px 40px;
    grid-column: 1 / 3;
  }
`

export const StyledButtonIcon = styled(BsArrowLeft)`
  font-size: 18px;
  margin-right: 10px;

  @media only screen and (min-width: 992px) {
    font-size: 22px;
    margin-right: 12px;
  }
`
