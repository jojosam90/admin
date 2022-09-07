import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useState } from 'react';
import { Box, Card, CardContent, Divider, makeStyles } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';
import ScrollButton from 'react-scroll-button';

const useStyles = makeStyles(() => ({
  root: {},
  chart: {
    height: '100%'
  }
}));

function LocationBarChart({ className, ...rest }) {
  const classes = useStyles();

  const performance = [
    {
      //Monday
      value: '10',
      labelx: 'Monday',
      status: 'Daily'
    },
    {
      //Tuesday
      value: '5',
      labelx: 'Tuesday',
      status: 'Daily'
    },
    {
      //Wednesday
      value: '11',
      labelx: 'Wednesday',
      status: 'Daily'
    },
    {
      //Thursday
      value: '20',
      labelx: 'Thursday',
      status: 'Daily'
    },
    {
      //Friday
      value: '13',
      labelx: 'Friday',
      status: 'Daily'
    },
    {
      //Saturday
      value: '28',
      labelx: 'Saturday',
      status: 'Daily'
    },
    {
      //Sunday
      value: '18',
      labelx: 'Sunday',
      status: 'Daily'
    },
    {
      //1st Week
      value: '10',
      labelx: '1st week',
      status: 'Weekly'
    },
    {
      //2nd Week
      value: '5',
      labelx: '2nd week',
      status: 'Weekly'
    },
    {
      //3rd Week
      value: '11',
      labelx: '3rd week',
      status: 'Weekly'
    },
    {
      //4th Week
      value: '20',
      labelx: '4th week',
      status: 'Weekly'
    },
    {
      // January
      value: '10',
      labelx: 'January',
      status: 'Monthly'
    },
    {
      // February
      value: '5',
      labelx: 'February',
      status: 'Monthly'
    },
    {
      // March
      value: '11',
      labelx: 'March',
      status: 'Monthly'
    },
    {
      // April
      value: '20',
      labelx: 'April',
      status: 'Monthly'
    },
    {
      // May
      value: '13',
      labelx: 'May',
      status: 'Monthly'
    },
    {
      // Jun
      value: '28',
      labelx: 'Jun',
      status: 'Monthly'
    },
    {
      // July
      value: '18',
      labelx: 'July',
      status: 'Monthly'
    },
    {
      // August
      value: '4',
      labelx: 'August',
      status: 'Monthly'
    },
    {
      // September
      value: '13',
      labelx: 'September',
      status: 'Monthly'
    },
    {
      // October
      value: '12',
      labelx: 'October',
      status: 'Monthly'
    },
    {
      // November
      value: '16',
      labelx: 'November',
      status: 'Monthly'
    },
    {
      // December
      value: '5',
      labelx: 'December',
      status: 'Monthly'
    }
  ];

  const [text, setText] = useState('');
  const arr1 = ['Daily', 'Weekly', 'Monthly'];
  let a = [];
  let b = [];
  let c = [];

  for (let i = 0; i < performance.length; i++) {
    if (performance[i].status === 'Daily') {
      a.push(performance[i]);
    }
    if (performance[i].status === 'Weekly') {
      b.push(performance[i]);
    }
    if (performance[i].status === 'Monthly') {
      c.push(performance[i]);
    }
  }
  const arr2 = [a, b, c];

  //value
  var energy = [];
  var s = 0;

  for (let i = 0; i < text.length; i++) {
    s = text[i]['value'];
    energy.push(s);
  }

  var lable1 = [];
  for (let i = 0; i < text.length; i++) {
    var str = text[i]['labelx'].toString();
    lable1.push(str);
  }
  const data = {
    labels: lable1,
    datasets: [
      {
        label: 'Energy (kWh)',
        data: energy,
        borderWidth: 1,
        backgroundColor: 'rgba(152, 102, 255,0.5)'
      }
    ]
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridlines: {
            // color: 'transparent'
            color: 'blue'
          }
        }
      ]
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Divider />
      <CardContent>
        <PerfectScrollbar>
          <Box height={400} minWidth={500}>
            <div>
              {arr1.map((data, i) => (
                <button key={i} onClick={() => setText(arr2[i])}>
                  {data}
                </button>
              ))}
            </div>
            <div>
              <Bar data={data} options={options} />
            </div>
            <div>
              <ScrollButton
                behavior={'smooth'}
                buttonBackgroundColor={'red'}
                iconType={'arrow-up'}
                style={{ fontSize: '24px' }}
              />
            </div>
          </Box>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
}

LocationBarChart.propTypes = {
  className: PropTypes.string
};

export default LocationBarChart;
