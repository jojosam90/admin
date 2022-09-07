import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  // Grid,
  // Item,
  Box
} from '@material-ui/core';
//import Box from '@mui/material/Box';
import Page from '../../../components/Page';
import AddNewUserDialog from './AddNewUserDialog';
import RefreshButton from './RefreshButton';
// import FilterDialog from './FilterDialog';
// import Search from './Search';
import UserTable from './UserTable';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container1: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function UserManagementView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false} className={classes.container1}>
        <Typography variant="h4" gutterBottom color="textSecondary">
          User Management
        </Typography>
        <Box
          component="div"
          display="inline-block"
          pb={1}
          m={0}
          //bgcolor="background.paper"
        >
          <AddNewUserDialog />
        </Box>
        <Box component="div" display="inline-block" minWidth="81%" />
        <Box
          component="div"
          display="inline-block"
          pb={1}
          m={0}
          //bgcolor="background.paper"
        >
          <RefreshButton />
          {/* <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <FilterDialog />
          </Grid> */}
        </Box>
        <UserTable />
      </Container>
    </Page>
  );
}
//item xs={1}
export default UserManagementView;
