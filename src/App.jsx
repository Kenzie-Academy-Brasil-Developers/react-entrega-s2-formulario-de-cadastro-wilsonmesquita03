import GlobalSyle from './styles/global';
import Routes from './routes'; 
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { darkModeContext } from './contexts/darkMode';

function App() {
  const { isNightMode } = useContext(darkModeContext)

  const light = {
    page: {
      backgroundColor: "var(--Grey-1)"
    },

    form: {
      backgroundColor: "var(--Grey-0)"
    },
    h1: {
      color: "var(--Grey-4)"
    },

  }

  const dark = {
    page: {
      backgroundColor: "var(--Grey-4)"
    },

    form: {
      backgroundColor: "var(--Grey-3)"
    },
    h1: {
      color: "var(--Grey-0)"
    },
  }

  return (
    <div className="App">
      <GlobalSyle />
      <ThemeProvider theme={isNightMode === "light" ? light : dark}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
