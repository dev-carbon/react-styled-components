import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import { MainContainer } from "./components/styles/MainContainer";
import SideBarLeft from "./components/SidebarLeft";
import SideBarRight from "./components/SidebarRight";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/styles/Main";
import Class from "./components/Class";
import Schedule from "./components/Schedule";

const theme = {
  colors: {
    primary: '#3F6CBA',
    secondary: '#5D7CFA',
    light: '#F5F7F6',
    lightBlue: '#D4EBFF',
    accent: '#F1884D',
    gray: '#999999'
  }
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <MainContainer>
            <Header />
            <SideBarLeft />
            <Main>
              <Class />
              <Schedule />
            </Main>
            <SideBarRight />
          </MainContainer>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
