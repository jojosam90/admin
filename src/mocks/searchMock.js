import mock from '../utils/mock';

mock.onGet('/api/search').reply(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          200,
          {
            results: [
              {
                title: 'Total Users',
                description: 'Total Users : 91'
              },
              {
                title: 'Total Location',
                description: 'Total Location : 15'
              },
              {
                title: 'Energy',
                description: 'Total Energy : 5988 kWh'
              }
            ]
          }
        ]);
      }, 1500);
    })
);
