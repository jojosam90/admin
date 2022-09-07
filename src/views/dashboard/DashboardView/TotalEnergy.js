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
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

function TotalEnergy({ className, ...rest }) {
  const classes = useStyles();
  const data = {
    energy: '5988',
    symbol: ' kWh'
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography variant="h2" gutterBottom color="textSecondary">
          Total Energy
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h1" color="textPrimary">
            {data.energy}
            {data.symbol}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

TotalEnergy.propTypes = {
  className: PropTypes.string
};

export default TotalEnergy;
