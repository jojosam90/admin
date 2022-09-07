import React from 'react';
import {
  Container,
  makeStyles,
  Tab,
  Tabs,
  Box,
  Typography
} from '@material-ui/core';
import Page from '../../../components/Page';
import Header from './Header';
import PropTypes from 'prop-types';
import CollapseTable from './CollapseTable';

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

function ChargerManagementView() {
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
  // const options = ['Changi', 'Marina Bay Sands', 'Orchard', 'Yishun'];
  // const ITEM_HEIGHT = 48;
  ///////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  // start dropdown
  // const [loc, setLoc] = React.useState('');
  // // end dropdown

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // end dropdown
  ///////////////////////////////////////////////////

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false} className={classes.container}>
        <Header />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="Charger Station" {...a11yProps(0)} />
              <Tab label="Charger Location" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {' '}
            <Typography variant="h4" gutterBottom color="textSecondary">
              {/* Charging Stations */}
              <CollapseTable />
            </Typography>
            {/* <Charger /> */}
          </TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
        </Box>
        {/* <Charger /> */}
      </Container>
    </Page>
  );
}

export default ChargerManagementView;
