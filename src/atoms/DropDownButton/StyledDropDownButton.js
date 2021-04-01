import styled from 'styled-components';

export const StyledDropDownButton = styled.button`
  background-color: var(${({theme}) => theme.backgroundElement});
  color: var(${({theme}) => theme.text});
  font-family: 'Nunito Sans', sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 16px 20px 16px 24px;
  font-size: 12px;

  @media only screen and (min-width: 992px) {
    font-size: 14px;
    padding: 18px 20px 18px 24px;
  }
`
