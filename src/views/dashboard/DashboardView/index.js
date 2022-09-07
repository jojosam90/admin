import React, { useState } from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  KeyboardArrowDownIcon
} from '@material-ui/core';
import Page from '../../../components/Page';
import Header from './Header';
import BarChartOverTime from './BarChartOverTime';
import TotalUsers from './TotalUsers';
import TotalLocation from './TotalLocation';
import TotalEnergy from './TotalEnergy';
import TotalRevenue from './TotalRevenue';
import TotalSessions from './TotalSessions';
import TotalTransaction from './TotalTransaction';
import TotalChargersPie from './TotalChargersPie';
import PeriodHeader from './PeriodHeader';
import PropTypes from 'prop-types';
import LocationChargers from './LocationChargers';
import LocationEnergy from './LocationEnergy';
import LocationTransactions from './LocationTransactions';
import LocationRevenue from './LocationRevenue';
import LocationLocation from './LocationLocation';
import LocationHeader from './LocationHeader';
import LocationBarChart from './LocationBarChart';

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

function DashboardView() {
  const classes = useStyles();

  // tab panel
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  ///////////////////////////////////////////////////
  // location
  const options = ['Changi', 'Marina Bay Sands', 'Orchard', 'Yishun'];
  const ITEM_HEIGHT = 48;
  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // start dropdown
  const [loc, setLoc] = React.useState('');
  // end dropdown

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end dropdown
  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false} className={classes.container}>
        {/* <Header /> */}
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Location Overview" {...a11yProps(1)} />
              {/* /////////////////////////////////////////////////// */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={3}>
              <Grid item lg={6} sm={6} xs={12}>
                <TotalChargersPie />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <TotalUsers />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <TotalLocation />
              </Grid>
              <PeriodHeader />
              <Grid item lg={3} sm={6} xs={12}>
                <TotalEnergy />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <TotalRevenue />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <TotalSessions />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <TotalTransaction />
              </Grid>
              <Grid item lg={12} xs={12}>
                <BarChartOverTime />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <LocationHeader />
            <Grid container spacing={3}>
              <Grid item lg={6} sm={6} xs={12}>
                <LocationChargers />
              </Grid>
              <PeriodHeader />
              <Grid item lg={3} sm={6} xs={12}>
                <LocationEnergy />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <LocationTransactions />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <LocationRevenue />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <LocationLocation />
              </Grid>
              <Grid item lg={12} xs={12}>
                <LocationBarChart />
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Container>
    </Page>
  );
}

export default DashboardView;
