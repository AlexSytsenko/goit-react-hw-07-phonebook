import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//Post /users/signup {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepassword"
// }

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    console.log(response);

    dispatch(authActions.registerSuccess(response.data));

  } catch (error) {
    dispatch(authActions.registerError(error.message))
  }
};

// Post /users/login

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest);

   try {
    const response = await axios.post('/users/login', credentials);

    dispatch(authActions.loginSuccess(response.data));

  } catch (error) {
    dispatch(authActions.loginError(error.message))
  }

};

//Post /users/logout

const logout = () => dispatch => { };


//Get /users/current

const getCurrentUser = () => (dispatch, getState) => { };

export default { register, logIn, logout, getCurrentUser }; 