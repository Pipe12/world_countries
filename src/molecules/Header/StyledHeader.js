import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(${({ theme }) => theme.backgroundElement});
  color: var(${({ theme }) => theme.text});
  padding: 0 16px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 992px) {
    padding: 0 80px;
  }
`
