import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'USer ID', width: 120 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150
    // editable: true
  },
  {
    field: 'tag',
    headerName: 'ID Tag',
    width: 150
    // editable: true
  },
  {
    field: 'type',
    headerName: 'ID type',
    width: 150
    // editable: true
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150
  },
  {
    field: 'parent',
    headerName: 'Parent Tag ID',
    width: 150
  },
  {
    field: 'expiry',
    headerName: 'Expiry Date',
    width: 150
  },
  {
    field: 'reservation',
    headerName: 'Reservation',
    width: 150
  },
  {
    field: 'action',
    headerName: 'Actions',
    width: 250,
    renderCell: (params) => {
      return (
        <div>
          <button>Reserve</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      );
    }
  }
];

const rows = [
  {
    id: 1,
    name: 'Jo Jo ',
    tag: '12345678',
    type: 'RFID',
    status: 'Valid',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '1'
  },
  {
    id: 2,
    name: 'Thien Sean ',
    tag: '987645312',
    type: 'RFID',
    status: 'Blocked',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '-'
  },
  {
    id: 3,
    name: 'Jo Jo ',
    tag: '12345678',
    type: 'RFID',
    status: 'Valid',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '1'
  },
  {
    id: 4,
    name: 'Thien Sean ',
    tag: '987645312',
    type: 'RFID',
    status: 'Blocked',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '-'
  },
  {
    id: 5,
    name: 'Thien Sean ',
    tag: '987645312',
    type: 'RFID',
    status: 'Blocked',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '-'
  },
  {
    id: 6,
    name: 'Jo Jo ',
    tag: '12345678',
    type: 'RFID',
    status: 'Valid',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '1'
  },
  {
    id: 7,
    name: 'Jo Jo ',
    tag: '12345678',
    type: 'RFID',
    status: 'Valid',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '1'
  },
  {
    id: 8,
    name: 'Jo Jo ',
    tag: '12345678',
    type: 'RFID',
    status: 'Valid',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '1'
  },
  {
    id: 9,
    name: 'Jo Jo ',
    tag: '12345678',
    type: 'RFID',
    status: 'Valid',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '1'
  },
  {
    id: 10,
    name: 'Jo Jo ',
    tag: '12345678',
    type: 'RFID',
    status: 'Valid',
    parent: '-',
    expiry: '30/12/2022',
    reservation: '1'
  }
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </Box>
  );
}
