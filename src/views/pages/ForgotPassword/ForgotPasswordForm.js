import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Box, Button, TextField, makeStyles } from '@material-ui/core';
import { register } from '../../../actions/accountActions';
import { Link as RouterLink } from 'react-router-dom';
// import { Box, Email, Item, Image, A } from "react-html-email";
import { Email, Item, A } from 'react-html-email';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
    style: {
      textDecoration: 'underline',
      color: '#2969ff',
      letterSspacing: 0.2
    }
  }
}));

function ForgotPasswordForm({ className, onSubmitSuccess, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
        {props.children}
      </a>
    );
  }
  return (
    <Formik
      initialValues={{
        email: 'jojo.sam@liteon.com'
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required')
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
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <Box mt={2} className={classes.button} alignItems="right">
            <Button
              color="white"
              disabled={isSubmitting}
              component={RouterLink}
              to="/login"
              display="flex"
              flexDirection="row"
              alignItems="center"
              size="large"
              type="submit"
              variant="contained">
              Cancel
            </Button>
            {/* <Mailto
              email={values.email}
              subject="LOS CSMS Account Password Reset"
              body="Hi,%20Here%20is%20a%20temporary%20password%20reset
              %20link%20for%20your%20LOS%20CSMS%20account.%20It%20can%20be%20
              used%20once%20and%20will%20expire%20after%205%20minutes.%20Please
              %20click%20on%20the%20link%20below%20to%20reset%20the%20password
              %20of%20your%20password%20of%20your%20account:">
              <Button color="secondary" variant="contained" size="large">
                Send
              </Button>
            </Mailto> */}
            <Button
              color="secondary"
              disabled={isSubmitting}
              component={RouterLink}
              to="/reset-password"
              display="flex"
              flexDirection="row"
              alignItems="center"
              size="large"
              type="submit"
              variant="contained">
              Send
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

ForgotPasswordForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func
};

ForgotPasswordForm.default = {
  onSubmitSuccess: () => {}
};

export default ForgotPasswordForm;
