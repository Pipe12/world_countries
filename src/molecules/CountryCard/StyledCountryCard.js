import styled from 'styled-components';

export const StyledCountryCard = styled.div`
  border: 1px solid transparent;
  overflow: hidden;
  background-color: var(${({ theme }) => theme.backgroundElement});
  max-width: 265px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px var(${({ theme }) => theme.shadow});
`
