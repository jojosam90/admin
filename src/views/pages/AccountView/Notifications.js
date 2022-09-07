import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles,
  Switch
} from '@material-ui/core';
// import wait from '../../../utils/wait';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Notifications({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make API request
    // await wait(500);
    try {
      // Make API request
      // await wait(500);
      // resetForm();
      // setStatus({ success: true });
      // setSubmitting(false);
      enqueueSnackbar('Notifications Settings updated', {
        variant: 'success'
      });
    } catch (error) {
      // setStatus({ success: false });
      // setErrors({ submit: error.message });
      // setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardHeader title="Notifications & Alerts" />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid item md={4} sm={6} xs={12}>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Notifications
              </Typography>
              <div>
                <FormControlLabel
                  control={<Switch defaultchecked />}
                  label="Notification for User Account Settings "
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Switch />}
                  label="Notification for OCPP events"
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Switch defaultchecked />}
                  label="Notification for all triggered events"
                />
              </div>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Typography gutterBottom variant="h6" color="textPrimary">
                Alerts
              </Typography>
              <div>
                <FormControlLabel
                  control={<Switch defaultchecked />}
                  label="Email alert for faults"
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button color="secondary" type="submit" variant="contained">
            Save Settings
          </Button>
        </Box>
      </Card>
    </form>
  );
}

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
