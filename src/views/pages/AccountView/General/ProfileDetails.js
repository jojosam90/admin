import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  }
}));

function ProfileDetails({ user, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center">
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography
            className={classes.name}
            gutterBottom
            variant="h3"
            color="textPrimary">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography>{user.role}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          // disabled={isSubmitting}
          type="submit"
          variant="contained"
          fullWidth
          component={RouterLink}
          // to="/login-unprotected">
          to="/login">
          Logout
        </Button>
      </CardActions>
    </Card>
  );
}

ProfileDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ProfileDetails;
