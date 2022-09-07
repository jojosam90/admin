import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  }
}));

function Error404View() {
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page className={classes.root} title="404: Not found">
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant={mobileDevice ? 'h4' : 'h1'}
          color="textPrimary">
          ERROR 404: The page you are looking for isn't here
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Please contact support !
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          {/* <img
            alt="Under development"
            className={classes.image}
            src="images/undraw_page_not_found_su7k.svg"
          /> */}
        </Box>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
            color="secondary"
            component={RouterLink}
            // to="/login-unprotected"
            to="/app/reports/dashboard"
            variant="outlined">
            Back to home
          </Button>
        </Box>
      </Container>
    </Page>
  );
}

export default Error404View;
