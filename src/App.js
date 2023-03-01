import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import ParallaxComponent from "./components/Parallax/Parallax";
import Technologies from "./components/Technologies/Technologies";
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
          <Home />
          <Projects />
          <About />
          <ParallaxComponent />
          <Technologies />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
