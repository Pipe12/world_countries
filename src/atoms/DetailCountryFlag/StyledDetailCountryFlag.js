import styled from 'styled-components';

export const StyledDetailCountryFlag = styled.figure`
  margin: 0;

  img {
    width: 100%;
    box-shadow: 0px 2px 10px 0px var(${({ theme }) => theme.shadow});
  }
`
