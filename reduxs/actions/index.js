import * as loginActions from './action-login';
import * as pinActions from './action-pin';
import * as authActions from './action-auth';
import * as authProfile from './action-profile';
import * as categoryActions from './action-category';
import * as customerActions from './action-customer';

const actions = {
  ...authActions,
  ...loginActions,
  ...pinActions,
  ...authProfile,
  ...categoryActions,
  ...customerActions,
};

export {actions};
