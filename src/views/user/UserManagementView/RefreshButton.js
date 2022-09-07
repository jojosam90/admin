import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button } from '@material-ui/core';
import { RotateCw as RotateIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  button: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

function RefreshButton({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        size="medium"
        startIcon={<RotateIcon />}></Button>
    </div>
  );
}

RefreshButton.propTypes = {
  className: PropTypes.string
};

export default RefreshButton;
