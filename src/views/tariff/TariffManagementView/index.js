import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Page from '../../../components/Page';
import CollapsibleTable from './CollapsibleTable';

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

function TariffManagementView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false} className={classes.container}>
        <Typography variant="h4" gutterBottom color="textSecondary">
          Tariff Management
        </Typography>
        <CollapsibleTable />
      </Container>
    </Page>
  );
}

export default TariffManagementView;
