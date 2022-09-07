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
import ForgotPasswordForm from './ForgotPasswordForm';

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

function ForgotPassword() {
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
          {/* <Button
            component={RouterLink}
            to="/app/dashboard"
            className={classes.backButton}>
            Back to home
          </Button> */}
        </Box>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h2" color="textPrimary">
              Forgot Password
            </Typography>
            <Typography variant="subtitle1">
              Please enter email address for the reset password link to be sent
              to
            </Typography>
            <Box mt={3}>
              <ForgotPasswordForm onSubmitSuccess={handleSubmitSuccess} />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default ForgotPassword;
