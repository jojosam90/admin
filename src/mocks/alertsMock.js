import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/alerts').reply(200, {
  alerts: [
    {
      id: '7e8883f1b51cc1956a5a1ec0',
      title: 'EVSE1, Yishun has a fault. Please Check.',
      description: 'Just Now',
      type: 'item_shipped',
      createdAt: moment().subtract(2, 'hours').toDate().getTime()
    },
    {
      id: '7e8883f7ed1486d665d8be1e',
      title: 'EVSE5, Changi has a fault. Please Check. ',
      description: '17/08/22 08:30',
      // type: ' alert_message_level2',
      type: 'item_shipped',
      createdAt: moment().subtract(1, 'day').toDate().getTime()
    },
    {
      id: '7e8883fca0e8612044248ecf',
      title: 'EVSE2, Lorong Chuan has a fault. Please Check',
      description: '5 mins ago',
      type: 'item_shipped',
      createdAt: moment().subtract(3, 'days').toDate().getTime()
    },
    {
      id: '7e88840187f6b09b431bae68',
      title: 'EVSE3, Ang Mo Kio has a fault. Please Check',
      description: '15/08/22 15:30',
      type: 'item_shipped',
      createdAt: moment().subtract(7, 'days').toDate().getTime()
    }
  ]
});
