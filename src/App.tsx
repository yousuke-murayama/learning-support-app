import {
  CssBaseline,
  GlobalStyles,
  styled,
  ThemeProvider,
} from '@mui/material';
import { theme } from './styles/theme';
import { Header } from './shared/components/header/Header';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

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
        <OffsetHeaderSpace />
        <RouterProvider router={router} />
      </StyledMain>
    </ThemeProvider>
  );
}

const StyledMain = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const OffsetHeaderSpace = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
}));

export default App;
