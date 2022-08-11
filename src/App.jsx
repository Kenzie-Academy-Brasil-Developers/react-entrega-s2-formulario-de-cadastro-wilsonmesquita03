import GlobalSyle from './styles/global';
import Routes from './routes'; 
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import { darkModeContext } from './contexts/darkMode';
import AuthProvider from './contexts/AuthContext';
import Loading from './components/Loading';

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
      <AuthProvider>
        <GlobalSyle />
        <ThemeProvider theme={isNightMode ? dark : light}>
          <Loading>
            <Routes />
          </Loading>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
