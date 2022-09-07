import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Card, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

function RevenueTransaction({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    currency: 'SGD',
    highest: '40',
    lowest: '5'
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography variant="h2" gutterBottom color="textSecondary">
          Highest Transaction
        </Typography>

        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h1" color="textPrimary">
            {data.currency}
            {data.highest}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h2" gutterBottom color="textSecondary">
            Lowest Transaction
          </Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography variant="h1" color="textPrimary">
              {data.currency}
              {data.lowest}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

RevenueTransaction.propTypes = {
  className: PropTypes.string
};

export default RevenueTransaction;
