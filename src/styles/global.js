import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    font-size: 10px;
    height: 100%;
  }

  body {
    font-family: 'Montserrat'; 
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* TODO avaliar depois como coloca o auto prefixer pra funcionar */
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #A1A5BC;
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color: #A1A5BC;
  }

  :-ms-input-placeholder { /* IE 10+ */
    color: #A1A5BC;
  }

  :-moz-placeholder { /* Firefox 18- */
    color: #A1A5BC;
  }

  input {
    font-size: 14px; /* fix bug zoom on mobile device*/
  }

  input.uppercase{
    text-transform: uppercase;

    &::placeholder {
      text-transform: none;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5500s ease-in-out 0s; /* remove background on autocomplete*/
  }
`;

export const AppContent = styled.div`
  height: calc(100vh - 3rem);
`;
