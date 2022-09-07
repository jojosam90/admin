import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import Auth from './components/Auth';
import useSettings from './hooks/useSettings';
import { createTheme } from './theme';
import Routes from './Routes';

const history = createBrowserHistory();
const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
);

function App() {
  useStyles();

  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <SnackbarProvider maxSnack={1}>
        <Router history={history}>
          <Auth>
            <Routes />
          </Auth>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
