/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Briefcase as BriefcaseIcon,
  Folder as FolderIcon,
  PieChart as PieChartIcon,
  Users as UsersIcon,
  BatteryCharging as EVIcon,
  DollarSign as RevenueIcon,
  Key as AdminsIcon
} from 'react-feather';
import Logo from '../../../components/Logo';
import NavItem from './NavItem';

const navConfig = [
  {
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/app/dashboard'
      },
      {
        title: 'Charger Management',
        icon: EVIcon,
        href: '/app/chargermanagement'
      },
      {
        title: 'Tariff Management',
        icon: BriefcaseIcon,
        href: '/app/tariffmanagement'
      }
    ]
  },
  {
    items: [
      {
        title: 'Users',
        icon: UsersIcon,
        href: '/app/usermanagement'
      }
    ]
  },
  {
    items: [
      {
        title: 'Revenue',
        icon: RevenueIcon,
        href: '/app/revenue'
      }
    ]
  },
  {
    items: [
      {
        title: 'Reports',
        icon: FolderIcon,
        items: [
          {
            title: 'Session Summary',
            href: '/app/session-summary'
          },
          {
            title: 'OCPP Log',
            href: '/app/ocpp-log'
          }
        ]
      }
    ]
  },
  {
    items: [
      {
        title: 'Admins',
        icon: AdminsIcon,
        href: '/app/admins'
      }
    ]
  }
];

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}>
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useSelector((state) => state.account);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">{/* <Logo /> */}</RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <RouterLink to="/app/account">
              <Avatar
                alt={user.firstName}
                className={classes.avatar}
                src={user.avatar}
              />
              {/* <Avatar alt="J" className={classes.avatar} src={user.avatar} /> */}
            </RouterLink>
          </Box>
          <Box mt={2} textAlign="center">
            <Link
              // component={RouterLink}
              // to="/app/account"
              variant="h3"
              color="textPrimary"
              underline="none">
              Hello {`${user.firstName} ${user.lastName}`} !
            </Link>
            <Typography variant="h3" color="textSecondary">
              {user.bio}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {navConfig.map((config) => (
            <List
              key={config.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {config.subheader}
                </ListSubheader>
              }>
              {renderNavItems({
                items: config.items,
                pathname: location.pathname
              })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary">
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
