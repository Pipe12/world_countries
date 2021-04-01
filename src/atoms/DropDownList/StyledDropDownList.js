import styled from 'styled-components';

export const StyledDropDownList = styled.ul`
  background-color: var(${({theme}) => theme.backgroundElement});
  border-radius: 5px;
  padding: 20px 24px;
  margin: 3px 0;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 12px;
  list-style: none;
  line-height: 32px;

  li {
    color: var(${({theme}) => theme.text});
    cursor: pointer;
  }

  @media only screen and (min-width: 992px) {
    font-size: 14px;
    line-height: 35px;
  }
`
