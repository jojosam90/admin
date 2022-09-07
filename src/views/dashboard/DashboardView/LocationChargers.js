import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Card, CardContent, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  chartContainer: {
    position: 'relative',
    height: '400px' //control size of dognut charts
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const TotalChargersPie = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const number = {
    chargers: {
      location: 'Yishun',
      data: '9'
    }
  };

  const data = {
    datasets: [
      {
        data: [3, 3, 2, 1],
        backgroundColor: [
          theme.palette.success.main,
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.white
        ],
        borderWidth: 1,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Avaialble', 'In Used', 'Faulty', 'Unavailable']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const devices = [
    {
      title: 'Available',
      value: '3',
      color: theme.palette.success.main
    },
    {
      title: 'In Used',
      value: '3',
      color: theme.palette.primary.main
    },
    {
      title: 'Faulty',
      value: '2',
      color: theme.palette.error.main
    },
    {
      title: 'Unavailable',
      value: '1',
      color: theme.palette.grey
    }
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      {/* <CardHeader /> */}
      <Box flexGrow={1}>
        <Typography variant="h2" gutterBottom color="textSecondary">
          Total Chargers in {number.chargers.location} :
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" flexWrap="wrap">
        <Typography variant="h1" align="center">
          {number.chargers.data}
        </Typography>
      </Box>
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut data={data} options={options} />
        </div>
        <div className={classes.stats}>
          {devices.map((device) => (
            <div className={classes.device} key={device.title}>
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography style={{ color: device.color }} variant="h2">
                {device.value}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

TotalChargersPie.propTypes = {
  className: PropTypes.string
};

export default TotalChargersPie;
