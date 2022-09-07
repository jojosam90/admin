import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/notifications').reply(200, {
  notifications: [
    {
      id: '5e8883f1b51cc1956a5a1ec0',
      title:
        'Changes has been made successfully for Yishun, Charging Station 1, EVSE 1.',
      description: '',
      type: 'order_placed',
      createdAt: moment().subtract(2, 'hours').toDate().getTime()
    },
    {
      id: '5e8883f7ed1486d665d8be1e',
      title:
        'Hard Restart has been accepted for Ochard, Charging Station 2, EVSE 3.',
      description: '',
      type: 'new_message',
      createdAt: moment().subtract(1, 'day').toDate().getTime()
    },
    {
      id: '5e8883fca0e8612044248ecf',
      title: 'Staretd a Transaction for User Id : C30838B successfully',
      description: '',
      type: 'item_shipped',
      createdAt: moment().subtract(3, 'days').toDate().getTime()
    },
    {
      id: '5e88840187f6b09b431bae68',
      title: 'Email has been updated successfully',
      description: '',
      type: 'new_message',
      createdAt: moment().subtract(7, 'days').toDate().getTime()
    }
  ]
});
