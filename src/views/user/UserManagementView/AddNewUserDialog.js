import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import MenuItem from '@material-ui/core/MenuItem';

const idtypes = [
  {
    label: 'RFID'
  },
  {
    label: 'Others'
  }
];
const statusOptions = [
  {
    label: 'Valid'
  },
  {
    label: 'Blocked'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

function AddNewUserDialog() {
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
      <Button variant="contained" onClick={handleClickOpen}>
        ADD NEW USER
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="AddNewUserDialog">
        <DialogTitle id="AddNewUserDialog">Add New User</DialogTitle>
        <DialogContent>
          <TextField
            label="User ID"
            defaultValue="112233"
            InputProps={{
              readOnly: true
            }}
            fullWidth
            variant="filled"
          />
          <TextField
            required
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="outlined"
          />
          <div>
            <TextField
              required
              margin="dense"
              id="idtag"
              label="ID Tag"
              fullWidth
              variant="outlined"
            />
          </div>
          <br />
          <div>
            <TextField
              className={classes.root}
              id="idtype"
              select
              label="ID Type"
              fullWidth
              size="small"
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
          <TextField
            className={classes.root}
            id="staus"
            select
            label="Status"
            fullWidth
            size="small"
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
          <TextField
            margin="dense"
            id="pidtag"
            label="Parent ID Tag"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="expirydate"
            label="Expiry Date"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddNewUserDialog.propTypes = {
  className: PropTypes.string
};

export default AddNewUserDialog;
