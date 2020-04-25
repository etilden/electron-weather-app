import axios from 'axios';

// https://weathermark-server.herokuapp.com/api/user/1

const SET_USER = 'SET_USER'; 

const setUser = userData => {
  return {
    type: SET_USER,
    userData
  }
}

export const fetchUserData = userId => {
  const url = `https://weathermark-server.herokuapp.com/api/user/${userId}`;
  return async dispatch => {
    try {
      const { data } = await axios.get(url)
      dispatch(setUser(data))
    } catch(err) {
      console.log(err)
    }
  }
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: 
      return action.userData
    default: 
      return state
  }
}

export default userReducer