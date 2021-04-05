import styled from 'styled-components';

export const StyledDetailCountryLayout = styled.div`
  min-height: 100%;
  padding: 40px 28px 64px 28px;
  display: grid;
  row-gap: 50px;
  justify-items: start;

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 80px;
    padding: 80px;
    row-gap: 50px;
  }
`
