import About from "./components/About/About";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <About />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
