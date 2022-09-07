import axios from '../utils/axios';

export const GET_ALERTS = '@notifications/get-alerts';

export function getAlerts() {
  const request = axios.get('/api/alerts');

  return (dispatch) => {
    request.then((response) =>
      dispatch({
        type: GET_ALERTS,
        payload: response.data
      })
    );
  };
}
