import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCountriesLayout = styled.section`
  margin-bottom: 24px;
`

export const StyledCountriesLayoutList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-auto-columns: 256px;
  gap: 40px 40px;
  justify-content: center;
`

export const StylesdCountryCardLink = styled(Link)`
  color: var(${({ theme }) => theme.text});
  text-decoration: none;
  border-radius: 5px;

  li{
    width: fit-content;
  }
`

