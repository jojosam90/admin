import axios from '../utils/axios';

export const GET_NOTIFICATIONS2 = '@notifications/get-notifications2';

export function getNotifications2() {
  const request = axios.get('/api/notifications2');

  return (dispatch) => {
    request.then((response) =>
      dispatch({
        type: GET_NOTIFICATIONS2,
        payload: response.data
      })
    );
  };
}
