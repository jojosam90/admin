import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
// import Logo from '../../../components/Logo';
import ResetPasswordForm from './ResetPasswordForm';

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

function ResetPassword() {
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
              Reset Your Password
            </Typography>
            <Box mt={3}>
              <ResetPasswordForm onSubmitSuccess={handleSubmitSuccess} />
            </Box>
            {/* <Box mt={3}>
              <Typography variant="subtitle1" color="textPrimary">
                Password nust be at least 8 characters, include a number, a
                special character, an uppercase letter and a lowercase letter.
              </Typography>
            </Box> */}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default ResetPassword;
