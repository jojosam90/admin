import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

const location = {
  revenue: {
    currency: 'SGD',
    data: '688'
  }
};

function LocationRevenue({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography variant="h2" gutterBottom color="textSecondary">
          Revenue
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h5" color="textPrimary">
            Total Revenue:
          </Typography>
        </Box>
        <Box>
          <Typography variant="h1" color="textPrimary">
            {location.revenue.currency}
            {location.revenue.data}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

LocationRevenue.propTypes = {
  className: PropTypes.string
};

export default LocationRevenue;
