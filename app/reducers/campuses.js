
// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS'

// ACTION CREATORS

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses};
  return action;
}


// THUNK CREATORS
export function fetchCampuses () {

    return function thunkCampuses (dispatch) {
      return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campus => {
          const action = getCampus(campus);
          dispatch(action);
        });
    };
  }
