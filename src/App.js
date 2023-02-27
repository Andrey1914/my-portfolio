import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <About />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
