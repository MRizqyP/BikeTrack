import {combineReducers} from 'redux';

import login from './login';
import pin from './pin';
import auth from './auth';
import profile from './profile';
import category from './category';
import customer from './customer';

export const reducer = combineReducers({
  login,
  pin,
  auth,
  profile,
  category,
  customer,
});
