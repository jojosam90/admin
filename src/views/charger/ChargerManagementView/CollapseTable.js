// import React from 'react';
// import MUIDataTable from 'mui-datatables';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { Box } from '@material-ui/core';

// // const Card = () => (
// //   <tr>
// //     <td className="fullWidth">
// //       <h1>
// //         lorem ipsum dorel em quol acee, vion, bloolw, wafeo, feiwjfoiew,
// //         foiwejifowefjweoi, fewjoewjfowei, fwefwefewfewfewf
// //       </h1>
// //     </td>
// //   </tr>
// // );

// const ExpandableRowTable = (props) => {
//   const columns = [
//     {
//       name: 'Name'
//     },
//     {
//       name: 'Title'
//     },
//     {
//       name: 'Location'
//     },
//     {
//       name: 'Age'
//     },
//     {
//       name: 'Salary'
//     }
//   ];
//   const data = [
//     ['Gabby George', 'Business Analyst', 'Minneapolis', 30, 100000],
//     ['Business Analyst', 'Business Consultant', 'Dallas', 55, 200000],
//     ['Jaden Collins', 'Attorney', 'Santa Ana', 27, 500000],
//     // ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, 50000],
//     // ['Aaren Rose', 'Business Consultant', 'Toledo', 28, 75000],
//     // ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, 94000],
//     // ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, 210000],
//     // ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, 65000],
//     // ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, 77000],
//     // ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, 135000],
//     // ['Harper White', 'Attorney', 'Pittsburgh', 52, 420000],
//     // ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, 150000],
//     // ['Frankie Long', 'Industrial Analyst', 'Austin', 31, 170000],
//     // ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, 90000],
//     // ['Justice Mann', 'Business Consultant', 'Chicago', 24, 133000],
//     // ['Addison Navarro', 'Business Management Analyst', 'New York', 50, 295000],
//     // ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, 200000],
//     // ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, 400000],
//     // ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, 110000],
//     // ['Danny Leon', 'Computer Scientist', 'Newark', 60, 220000],
//     // ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, 180000],
//     // ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, 99000],
//     // ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, 90000],
//     // ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, 140000],
//     // ['Justice Mccarthy', 'Attorney', 'Tucson', 26, 330000],
//     // ['Silver Carey', 'Computer Scientist', 'Memphis', 47, 250000],
//     // ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, 190000],
//     // ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, 80000],
//     [
//       'Gabby Strickland',
//       'Business Process Consultant',
//       'Scottsdale',
//       26,
//       45000
//     ],
//     ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, 142000]
//   ];

//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9)
//   ];

//   const options = {
//     filter: true,
//     onFilterChange: (changedColumn, filterList) => {
//       console.log(changedColumn, filterList);
//     },
//     selectableRows: 'single',
//     filterType: 'dropdown',
//     responsive: 'scrollMaxHeight',
//     rowsPerPage: 10,
//     expandableRows: true,
//     renderExpandableRow: (rowData, rowMeta) => {
//       console.log(rowData, rowMeta);
//       return (
//         <React.Fragment>
//           <tr>
//             <td colSpan={6}>
//               <TableContainer component={Paper}>
//                 <Table style={{ minWidth: '800' }} aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Dessert (100g serving)</TableCell>
//                       <TableCell align="right">Calories</TableCell>
//                       <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                       <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                       <TableCell align="right">Calories</TableCell>
//                       <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                       <TableCell align="right">Calories</TableCell>
//                       <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                       <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.name}>
//                         <TableCell component="th" scope="row">
//                           {row.name}
//                         </TableCell>
//                         <TableCell align="right">{row.calories}</TableCell>
//                         <TableCell align="right">{row.fat}</TableCell>
//                         <TableCell align="right">{row.carbs}</TableCell>
//                         <TableCell align="right">{row.protein}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan={6}>
//               <TableContainer component={Paper}>
//                 <Table style={{ minWidth: '650' }} aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Dessert (100g serving)</TableCell>
//                       <TableCell align="right">Calories</TableCell>
//                       <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                       <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                       <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow key={row.name}>
//                         <TableCell component="th" scope="row">
//                           {row.name}
//                         </TableCell>
//                         <TableCell align="right">{row.calories}</TableCell>
//                         <TableCell align="right">{row.fat}</TableCell>
//                         <TableCell align="right">{row.carbs}</TableCell>
//                         <TableCell align="right">{row.protein}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </td>
//           </tr>
//         </React.Fragment>
//       );
//     },
//     page: 1
//   };

//   return (
//     <Box sx={{ height: 800, width: '100%' }}>
//       <MUIDataTable
//         // title={'ACME Employee list'}
//         data={data}
//         columns={columns}
//         options={options}
//       />
//     </Box>
//   );
// };

// export default ExpandableRowTable;

import useCollapse from 'react-collapsed';
import './charger.css';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  RightOutlined,
  DownOutlined,
  PlusOutlined,
  BarsOutlined,
  EditOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Modal from 'react-modal';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

Modal.setAppElement('#root');

function Collapsible1(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const listCS = props.list.chargingStations
    .filter(Boolean)
    .map((CS, i) => (
      <Collapsible2
        key={CS.id}
        list={props.list.chargingStations[i]}
        area={props.list.area}
        onClickMenu={props.onClickMenu}
        onCloseMenu={props.onCloseMenu}
        openMenuCSFunc={props.openMenuCSFunc}
        openMenuChargerFunc={props.openMenuChargerFunc}
        anchorEl={props.anchorEl}
      />
    ));

  return (
    <div className="collapsible">
      <div className="header">
        <div className="rowAlign">
          <span className="headerAreaName" {...getToggleProps()}>
            {isExpanded ? <DownOutlined /> : <RightOutlined />}
            {'\u00a0\u00a0'}
            {props.list.area}
          </span>

          <div className="headerAreaRightAlign">
            <button type="button" className="btnControlArea">
              <PlusOutlined />
            </button>
            <button
              type="button"
              className="btnControlArea"
              onClick={() => alert('Editing is currently unavailable')}>
              <EditOutlined />
            </button>
          </div>
        </div>
      </div>

      <div className="header2" {...getCollapseProps()}>
        {listCS}
      </div>
    </div>
  );
}

function Collapsible2(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const listEvse = props.list.EVSEs.filter(Boolean).map((EVSE, i) => (
    <Collapsible3
      key={EVSE.id}
      list={props.list.EVSEs[i]}
      csName={props.list.csName}
      area={props.area}
      onClickMenu={props.onClickMenu}
      onCloseMenu={props.onCloseMenu}
      openMenuCSFunc={props.openMenuCSFunc}
      openMenuChargerFunc={props.openMenuChargerFunc}
      anchorEl={props.anchorEl}
    />
  ));

  return (
    <div className="collapsible">
      <div className="header">
        <div className="rowAlign">
          <span className="headerCSName" {...getToggleProps()}>
            {isExpanded ? <DownOutlined /> : <RightOutlined />}
            {'\u00a0\u00a0'}
            {props.list.csName}
          </span>
          <div className="headerCSRightAlign">
            <button
              type="button"
              className="btnControlArea"
              onClick={(e) => props.onClickMenu(e, 'CS Function')}>
              <MenuUnfoldOutlined style={{ fontSize: '100%' }} />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={props.anchorEl}
              open={props.openMenuCSFunc}
              onClose={(e) => props.onCloseMenu(e, '')}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}>
              <MenuItem
                onClick={(e) =>
                  props.onCloseMenu(
                    e,
                    props.list.csName + ' Change Availability'
                  )
                }>
                Change Availability
              </MenuItem>
              <MenuItem
                onClick={(e) => props.onCloseMenu(e, 'Diagnostics Report')}>
                Diagnostics Report
              </MenuItem>
              <MenuItem onClick={(e) => props.onCloseMenu(e, 'Local list')}>
                Local list
              </MenuItem>
              <MenuItem
                onClick={(e) => props.onCloseMenu(e, 'Update Firmware')}>
                Update Firmware
              </MenuItem>
            </Menu>
            <button
              type="button"
              className="btnControlArea"
              onClick={props.onClick}>
              <EditOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className="header3" {...getCollapseProps()}>
        {listEvse}
      </div>
    </div>
  );
}

function Collapsible3(props) {
  return (
    <div className="chargerDetails">
      <div className="rowAlign">
        Name:{'\u00a0'} <div id="evseName"> {props.list.evseName}</div>,
        {'\u00a0'}Address:{'\u00a0'}
        <div id="evseAddress"> {props.list.address}</div>
      </div>
      <div className="rowAlign" style={{ marginTop: 10 }}>
        <span className="headerDir">
          {props.area}
          {'\u00a0'}
          <span className="headerDirDelimiter">{'>'}</span>
          {'\u00a0'}
          {props.csName}
          {'\u00a0'}
          <span className="headerDirDelimiter">{'>'}</span>
          {'\u00a0'}
          {props.list.evseName}
        </span>
      </div>
      <div className="rowAlign">
        <div className="panel">
          Status:
          <div id="evseStatus">{props.list.status}</div>
          No. of Connector:
          <div id="evseInfoStyle2">{props.list.connCount}</div>
          Connector Type:
          <div id="evseInfoStyle2">{props.list.connType}</div>
        </div>

        <div className="panel" style={{ marginLeft: 24 }}>
          Ongoing Reservation:
          <div id="evseStatus">{props.list.ongoingRes}</div>
          Total No. of <br />
          Transaction:
          <div id="evseInfoStyle2">{props.list.transCount}</div>
        </div>

        <div
          className="panel"
          style={{ height: 45, marginLeft: 24, width: 190 }}>
          Rated Power:
          <div id="evseInfoStyle2">{props.list.TPC}</div>
          <button
            type="submit"
            className="btnControl"
            onClick={() =>
              alert(
                'Restarting ' +
                  props.list.evseName +
                  ' of ' +
                  props.csName +
                  ' is currently unavailable'
              )
            }
            style={{ marginTop: 26, marginLeft: -10 }}>
            Restart
          </button>
          <button
            type="button"
            className="btnControl"
            onClick={() =>
              alert(
                'Unlocking ' +
                  props.list.evseName +
                  ' of ' +
                  props.csName +
                  ' is currently unavailable'
              )
            }
            style={{ marginLeft: 10 }}>
            Unlock
          </button>
          <div>
            <button
              type="button"
              className="btnStart"
              onClick={() =>
                alert(
                  'Starting ' +
                    props.list.evseName +
                    ' of ' +
                    props.csName +
                    ' is currently unavailable'
                )
              }
              style={{ marginTop: 8, marginLeft: -10 }}>
              Start
            </button>
            <button
              type="button"
              className="btnStop"
              onClick={() =>
                alert(
                  'Stopping ' +
                    props.list.evseName +
                    ' of ' +
                    props.csName +
                    ' is currently unavailable'
                )
              }
              style={{ marginLeft: 10 }}>
              Stop
            </button>
          </div>
        </div>
        <div className="evseMenu">
          <button
            type="button"
            className="btnEvseMenu"
            onClick={(e) => props.onClickMenu(e, 'Charger Function')}>
            <MenuUnfoldOutlined style={{ fontSize: '130%' }} />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={props.anchorEl}
            open={props.openMenuChargerFunc}
            onClose={(e) => props.onCloseMenu(e, '')}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}>
            <MenuItem
              onClick={(e) =>
                props.onCloseMenu(
                  e,
                  props.list.evseName +
                    ' of ' +
                    props.csName +
                    'Change Availability'
                )
              }>
              Change Availability
            </MenuItem>
            <MenuItem
              onClick={(e) => props.onCloseMenu(e, 'Change Parameters')}>
              Configure Parameters
            </MenuItem>
            <MenuItem
              onClick={(e) => props.onCloseMenu(e, 'Clear Cache/Storage')}>
              Clear Cache/Storage
            </MenuItem>
            <MenuItem
              onClick={(e) => props.onCloseMenu(e, 'Diagnostics Report')}>
              Diagnostics Report
            </MenuItem>
            <MenuItem onClick={(e) => props.onCloseMenu(e, 'Update Firmware')}>
              Update Firmware
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

function CollapsibleNested(props) {
  const listItems = props.list.map((areas, i) => (
    <Collapsible1
      key={areas.id}
      list={props.list[i]}
      onClickMenu={props.onClickMenu}
      onCloseMenu={props.onCloseMenu}
      openMenuCSFunc={props.openMenuCSFunc}
      openMenuChargerFunc={props.openMenuChargerFunc}
      anchorEl={props.anchorEl}
    />
  ));
  return <ul>{listItems}</ul>;
}

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
        <Box sx={{ p: 3 }}>
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

function CollapseTable() {
  const [user, setUser] = useState({
    userid: 1,
    username: 'Paul',
    status: 'Admin'
  });
  const { userid, username, status } = user; // destructing
  const [chargingStationData, setChargingStationData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [newLocation, setNewLocation] = useState('');
  const [value, setValue] = React.useState(0);

  const [tmp, SetTmp] = useState(0);

  const handleChange = (event) => {
    setNewLocation(event.target.value);
  };

  function toggleModal() {
    if (isOpen === false) {
      setNewLocation('');
    }
    setIsOpen(!isOpen);
  }

  const [offlineData, setOfflineData] = useState([
    {
      id: 1,
      area: 'Yishun',
      chargingStations: [
        {
          id: 1,
          csName: 'CS1',
          EVSEs: [
            {
              id: 1,
              evseName: 'YISHUN_EVSE1',
              address: 'Yishun Street 2',
              status: 'Available',
              connCount: 4,
              connType: 'Type 2',
              ongoingRes: 1,
              transCount: 12,
              TPC: '33kW'
            },
            {
              id: 2,
              evseName: 'YISHUN_EVSE2',
              address: 'Yishun Central',
              status: 'Available',
              connCount: 1,
              connType: 'Type 2',
              ongoingRes: 2,
              transCount: 9,
              TPC: '24kW'
            }
          ]
        },
        {
          id: 2,
          csName: 'CS2',
          EVSEs: [
            {
              id: 3,
              evseName: 'YISHUN_EVSE1',
              address: 'Yishun Central',
              status: 'Available',
              connCount: 1,
              connType: 'Type 2',
              ongoingRes: 2,
              transCount: 7,
              TPC: '29kW'
            },
            {
              id: 4,
              evseName: 'YISHUN_EVSE2',
              address: 'Yishun Central',
              status: 'Available',
              connCount: 1,
              connType: 'Type 2',
              ongoingRes: 3,
              transCount: 4,
              TPC: '26kW'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      area: 'Bishan',
      chargingStations: [
        {
          id: 3,
          csName: 'CS1',
          EVSEs: [
            {
              id: 5,
              evseName: 'BISHAN_EVSE1',
              address: 'Bishan street',
              status: 'Available',
              connCount: 1,
              connType: 'Type 2',
              ongoingRes: 2,
              transCount: 9,
              TPC: '29kW'
            },
            {
              id: 6,
              evseName: 'BISHAN_EVSE2',
              address: 'Bishan MRT',
              status: 'Available',
              connCount: 1,
              connType: 'Type 2',
              ongoingRes: 2,
              transCount: 9,
              TPC: '29kW'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      area: 'Lorong Chuan',
      chargingStations: [
        {
          id: 4,
          csName: 'CS1',
          EVSEs: [
            {
              id: 7,
              evseName: 'LORCHUAN_EVSE1',
              address: 'Lorong Chuan Street 1',
              status: 'Available',
              connCount: 2,
              connType: 'Type 2',
              ongoingRes: 2,
              transCount: 13,
              TPC: '45kW'
            },
            {
              id: 8,
              evseName: 'LORCHUAN_EVSE2',
              address: 'Lorong Chuan street 2',
              status: 'Available',
              connCount: 1,
              connType: 'Type 2',
              ongoingRes: 1,
              transCount: 9,
              TPC: '29kW'
            }
          ]
        }
      ]
    }
  ]);

  const [isOnlineMode, setIsOnlineMode] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenuCSFunc, setOpenMenuCSFunc] = useState(false);
  const [openMenuChargerFunc, setOpenMenuChargerFunc] = useState(false);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     if (isOnlineMode === true) {
  //       console.log('API updated');
  //       axios
  //         .post(
  //           'https://ec3b2337-43bc-4be5-bf81-6a7365b99f4d.mock.pstmn.io/chargermanagement',
  //           user
  //         )
  //         .then((response) => {
  //           setChargingStationData(response.data);
  //           console.log(response.data);
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   }, 4000);
  //   return () => {
  //     clearInterval(timerId);
  //   };
  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, [isOnlineMode]);

  const handleClickCancelNewLoc = () => {
    setIsOpen(!isOpen);
  };

  const handleClickRefresh = () => {
    isOnlineMode ? setIsOnlineMode(false) : setIsOnlineMode(true);
    axios
      .post(
        'https://a6b8dcfc-0147-4850-ba5b-625b26d7c1df.mock.pstmn.io/chargermanagement',
        user
      )
      .then((response) => {
        setChargingStationData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleClickMenu = (event, action) => {
    setAnchorEl(event.currentTarget);
    switch (action) {
      case 'CS Function':
        setOpenMenuCSFunc(true);
        return '';
      case 'Charger Function':
        setOpenMenuChargerFunc(true);
        return '';
      default:
    }
  };

  const handleCloseMenu = (e, action) => {
    setAnchorEl(null);
    setOpenMenuCSFunc(false);
    setOpenMenuChargerFunc(false);
    if (action !== '') {
      alert(action);
    }
  };

  const btnLiveName = isOnlineMode ? 'Stop Live Update' : 'Start Live Update';

  return (
    <Box sx={{ width: '81%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example">
          {/* <Tab label="Charging Station" {...a11yProps(0)} />
          <Tab label="Charger Location" {...a11yProps(1)} /> */}
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>

      {/* <TabPanel value={value} index={0}> */}
      <div className="rowAlign">
        <div className="CSheader2">Charging Stations</div>
        <span className="headerRightAlign">
          <div className="flex-end">
            <button
              type="button"
              className="btnStyle3"
              style={{ width: 120 }}
              onClick={handleClickRefresh}>
              Refresh
            </button>
            <button
              type="button"
              className="btnStyle3"
              style={{ width: 150 }}
              onClick={toggleModal}>
              <PlusOutlined />
              {'\u00a0'} Add location
            </button>
            <button
              type="button"
              className="btnStyle3"
              onClick={() => alert('Unlocking is currently unavailable')}>
              <BarsOutlined />
              {'\u00a0'}Filter
            </button>
          </div>
        </span>
      </div>
      {/* </TabPanel> */}
      <CollapsibleNested
        list={isOnlineMode ? chargingStationData : offlineData}
        onClickMenu={handleClickMenu}
        onCloseMenu={handleCloseMenu}
        openMenuCSFunc={openMenuCSFunc}
        openMenuChargerFunc={openMenuChargerFunc}
        anchorEl={anchorEl}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}>
        <span>
          <div>
            <h4>Add new location</h4>
          </div>
          <hr></hr>
          <div className="rowAlign" style={{ marginTop: 30 }}>
            Location Name:
            <input
              className="inputNewLocation"
              type="text"
              id="newLocation"
              name="newLocation"
              onChange={handleChange}
              value={newLocation}
              autoComplete="off"
            />
          </div>
          <div className="flex-end">
            <button
              className="btnAddLocation"
              onClick={handleClickCancelNewLoc}>
              Cancel
            </button>
            <button
              className="btnAddLocation"
              onClick={handleClickCancelNewLoc}>
              Add
            </button>
          </div>
        </span>
      </Modal>
    </Box>
  );
}

export default CollapseTable;
