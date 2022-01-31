import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  --blue-bg:#0078d4;
  --default-bg:#212121;
  --text-color:#eee;
}
body{
  background-color:#212121;
  min-height:100vh;
  color:#eee;
  margin-top:0;
  font-family: 'Poppins', sans-serif;
}
a{text-decoration:none }
`;

export default GlobalStyle;
