import styled from 'styled-components';

export const StyledSearchLayout = styled.div`
  display: grid;
  grid-template-rows: 50px 50px;
  row-gap: 40px;
  padding: 30px 0 30px 0;

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 200px;
    grid-template-rows: 55px;
  }
`
