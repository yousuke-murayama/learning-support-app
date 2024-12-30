import {
  CssBaseline,
  GlobalStyles,
  styled,
  ThemeProvider,
} from '@mui/material';
import HomePage from './pages/home/HomePage';
import { theme } from './styles/theme';
import { Header } from './shared/components/header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '*': {
            padding: 0,
            margin: 0,
          },
        }}
      />
      <Header />
      <StyledMain>
        <HomePage />
      </StyledMain>
    </ThemeProvider>
  );
}

const StyledMain = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export default App;
