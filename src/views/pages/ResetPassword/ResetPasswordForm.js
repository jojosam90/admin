import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Box,
  Button,
  TextField,
  makeStyles,
  Typography
} from '@material-ui/core';
import { register } from '../../../actions/accountActions';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
    // button2: {
    //   '& > * + *': {
    //     marginRight: theme.spacing(80)
    //   }
    // }
  }
}));

function ResetPasswordForm({ className, onSubmitSuccess, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        password: '',
        confirmpassword: ''
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().min(7).max(255).required('Password is required'),
        confirmpassword: Yup.string()
          .min(7)
          .max(255)
          .required('Password is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await dispatch(register(values));
          onSubmitSuccess();
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
          setSubmitting(false);
        }
      }}>
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}>
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="New Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.confirmpassword && errors.confirmpassword)}
            fullWidth
            helperText={touched.confirmpassword && errors.confirmpassword}
            label="Re-enter Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.confirmpassword}
            variant="outlined"
          />
          <Box mt={3}>
            <Typography variant="subtitle1" color="textPrimary">
              Password nust be at least 8 characters, include a number, a
              special character, an uppercase letter and a lowercase letter.
            </Typography>
          </Box>
          <Box mt={2} className={classes.button}>
            <Button
              color="white"
              disabled={isSubmitting}
              component={RouterLink}
              to="/forgot-password"
              display="flex"
              flexDirection="row"
              alignItems="center"
              size="large"
              type="submit"
              variant="contained">
              Cancel
            </Button>
            <Button
              color="secondary"
              disabled={isSubmitting}
              display="flex"
              flexDirection="row"
              alignItems="center"
              size="large"
              type="submit"
              variant="contained">
              Set Password
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

ResetPasswordForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func
};

ResetPasswordForm.default = {
  onSubmitSuccess: () => {}
};

export default ResetPasswordForm;
