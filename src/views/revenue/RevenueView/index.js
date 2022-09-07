import React from 'react';
import { Container, makeStyles, Typography, Grid } from '@material-ui/core';
import Page from '../../../components/Page';
import BarChartOverTime from './BarChartOverTime';
import RevenueTransaction from './RevenueTransaction';
import RevenueLocation from './RevenueLocation';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function RevenueView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="h4" gutterBottom color="textSecondary">
          Revenue
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={6} xs={12}>
            <RevenueTransaction />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <RevenueLocation />
          </Grid>
          <Grid item lg={12} xs={12}>
            <BarChartOverTime />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default RevenueView;
