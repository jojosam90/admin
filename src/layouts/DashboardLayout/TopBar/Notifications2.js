import React, { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  SvgIcon,
  Tooltip,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertTriangle as AlertIcon,
  Package as PackageIcon,
  MessageCircle as MessageIcon,
  Truck as TruckIcon
} from 'react-feather';
import { getNotifications2 } from '../../../actions/notificationsActions2';

const iconsMap = {
  order_placed: PackageIcon,
  new_message: MessageIcon,
  item_shipped: TruckIcon
};

const useStyles = makeStyles((theme) => ({
  popover: {
    width: 320
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

function Notifications2() {
  const classes = useStyles();
  const notifications2 = useSelector(
    (state) => state.notifications2.notifications2
  );
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getNotifications2());
  }, [dispatch]);

  return (
    <>
      <Tooltip title="Alerts">
        <IconButton color="inherit" ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <AlertIcon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}>
        <Box p={2}>
          <Typography variant="h5" color="textPrimary">
            Alerts
          </Typography>
        </Box>
        {notifications2.length === 0 ? (
          <Box p={2}>
            <Typography variant="h6" color="textPrimary">
              There are no alerts
            </Typography>
          </Box>
        ) : (
          <>
            <List className={classes.list} disablePadding>
              {notifications2.map((notification) => {
                const Icon = iconsMap[notification.type];

                return (
                  <ListItem
                    className={classes.listItem}
                    component={RouterLink}
                    divider
                    key={notification.id}
                    to="#">
                    <ListItemText
                      primary={notification.title}
                      primaryTypographyProps={{
                        variant: 'subtitle2',
                        color: 'textPrimary'
                      }}
                      secondary={notification.description}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Box p={1} display="flex" justifyContent="center">
              <Button component={RouterLink} size="small" to="#">
                Mark all as read
              </Button>
            </Box>
          </>
        )}
      </Popover>
    </>
  );
}

export default Notifications2;
