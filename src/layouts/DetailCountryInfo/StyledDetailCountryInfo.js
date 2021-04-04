import styled from 'styled-components';

export const StyledDetailCountryInfo = styled.section`
  display: grid;
  row-gap: 30px;
  color: var(${({ theme }) => theme.text});
  width: 100%;

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
    margin-top: 50px;
    margin-bottom: 40px;
  }
`
