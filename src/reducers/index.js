import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accountReducer from './accountReducer';
import notificationsReducer from './notificationsReducer';
import notificationsReducer2 from './notificationsReducer2';

const rootReducer = combineReducers({
  account: accountReducer,
  notifications: notificationsReducer,
  notifications2: notificationsReducer2,
  form: formReducer
});

export default rootReducer;
