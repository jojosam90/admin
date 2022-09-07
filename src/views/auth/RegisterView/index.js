import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Logo from '../../../components/Logo';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80
  }
}));

function RegisterView() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmitSuccess = () => {
    history.push('/app/login');
  };

  return (
    <Page className={classes.root} title="Register">
      <Container maxWidth="sm">
        <Box mb={5} display="flex" alignItems="center">
          <RouterLink to="/">{/* <Logo /> */}</RouterLink>
          <Button
            component={RouterLink}
            to="/app/reports/dashboard"
            className={classes.backButton}>
            Back to home
          </Button>
        </Box>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h2" color="textPrimary">
              Sign up
            </Typography>
            <Box mt={3}>
              <RegisterForm onSubmitSuccess={handleSubmitSuccess} />
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              // to="/login-unprotected"
              to="/login"
              variant="body2"
              color="textSecondary">
              Have an account?
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default RegisterView;
