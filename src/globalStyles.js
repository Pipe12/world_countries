import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --dark-blue: hsl(209, 23%, 22%);
    --darker-blue: hsl(207, 26%, 17%);
    --darkest-blue: hsl(200, 15%, 8%);
    --dark-gray: hsl(0, 0%, 52%);
    --very-light-gray: hsl(0, 0%, 98%);
    
    --dark-mode-background: var(--darker-blue);
    --dark-mode-element: var(--dark-blue);
    --dark-mode-text: white;
    --dark-mode-input: var(--dark-blue);
    
    
    --light-mode-background: var(--very-light-gray);
    --light-mode-element: white;
    --light-mode-text: var(--darkest-blue);
    --light-mode-input: var(--dark-gray);
  }

  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(${ ({theme}) => theme.backgroundBody } );
  }
`
