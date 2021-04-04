import styled from 'styled-components';

export const StyledDetailCountryBorders = styled.div`
  display: grid;
  gap: 24px;

  @media only screen and (min-width: 992px) {
      grid-template-columns: 130px 1fr;
      gap: 16px;
      grid-column: 1 / 3;
  }
`
