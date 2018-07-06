import {
  SAVE_USER, LOG_OUT
} from '../actions/types';


const INITIAL_STATE = {
  user: {}
}

export default (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SAVE_USER:
      return  Object.assign({}, state, {user: action.payload});
    case LOG_OUT:
      return  Object.assign({}, state, {user: {}});
    default:
      return state;
  }
}
