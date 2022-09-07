/* eslint-disable no-param-reassign */
import produce from 'immer';
import { GET_NOTIFICATIONS2 } from '../actions/notificationsActions2';

const initialState = {
  notifications2: []
};

const notificationsReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS2: {
      const { notifications2 } = action.payload;

      return produce(state, (draft) => {
        draft.notifications2 = notifications2;
      });
    }

    default: {
      return state;
    }
  }
};

export default notificationsReducer2;
