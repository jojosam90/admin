import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Layers as LayersIcon } from 'react-feather';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import MenuItem from '@material-ui/core/MenuItem';

const idtypes = [{ label: 'RFID' }, { label: 'Others' }];
const statusOptions = [
  {
    label: 'Valid'
  },
  {
    label: 'Blocked'
  }
];
const dates = [
  { label: '30/04/2022 - 30/05/2022' },
  { label: '30/05/2022 - 30/06/2022' },
  { label: '30/06/2022 - 30/07/2022' },
  { label: '30/07/2022 - 30/08/2022' },
  { label: '30/08/2022 - 30/09/2022' },
  { label: '30/09/2022 - 30/10/2022' },
  { label: '30/10/2022 - 30/11/2022' },
  { label: '30/11/2022 - 30/12/2022' },
  { label: '30/12/2022 - 30/01/2023' }
];
const reservations = [
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '10' }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

function FilterDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<LayersIcon />}>
        Filter
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="FilterDialog"
        maxWidth="xs"
        fullWidth>
        <DialogTitle id="FilterDialog">Filter</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              className={classes.root}
              id="idtype"
              select
              label="ID TYPE"
              fullWidth
              size="medium"
              SelectProps={{
                native: true
              }}
              variant="outlined">
              {idtypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <br />
          <div>
            <TextField
              className={classes.root}
              id="status"
              select
              label="STATUS"
              fullWidth
              size="medium"
              SelectProps={{
                native: true
              }}
              variant="outlined">
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <br />
          <div>
            <TextField
              className={classes.root}
              id="date"
              select
              label="EXPIRY DATE RANGE"
              fullWidth
              size="medium"
              SelectProps={{
                native: true
              }}
              variant="outlined">
              {dates.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <br />
          <TextField
            className={classes.root}
            id="reservation"
            select
            label="RESERVATION"
            fullWidth
            size="medium"
            SelectProps={{
              native: true
            }}
            variant="outlined">
            {reservations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button onClick={handleClose} color="primary">
            Filter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

FilterDialog.propTypes = {
  className: PropTypes.string
};

export default FilterDialog;
