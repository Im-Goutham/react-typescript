// import axios from 'axios';
// import {API_URL} from '../config'
import {
   LOG_OUT, SAVE_USER
} from './types';


export const signIn = (user: any, callback: any) => async (dispatch: any) => {
  try {

  // const response = await axios.post(API_URL+'/login', user);
  // const {data}=response;
  //
  // if(data.status === 1){
  //   await localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: SAVE_USER, payload: user });
  // }
  // callback(response);
  } catch (error) {
    throw error;
  }
};


export const logOut = () => async (dispatch: any) => {
  try {
    await localStorage.setItem("user", "");
    dispatch({ type: LOG_OUT, payload: {} });
  } catch (error) {
    throw error;
  }
};

// export const connectionState = ( status ) => {
//   return { type: CHANGE_CONNECTION_STATUS, payload: status };
// };
