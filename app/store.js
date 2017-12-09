import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// export createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const GET_STUDENT = 'GET_STUDENT'

//ACTION CREATORS

export function getCampuses (campuses){
  return {
    type: GET_CAMPUSES,
    campuses
  };

}

export function getStudents (students){
  return {
    type: GET_STUDENTS,
    students
  }
}

export function getCampus (campus){
  return {
    type: GET_CAMPUS,
    campus
  }
}

export function getStudent (student){
  return {
    type: GET_STUDENT,
    student
  }
}

const initialState = {
  campuses : [],
  students : [],
  selectedCampus: {},
  selectedStudent: {}
}

//ACTION REDUCER
function reducer(state = initialState, action){
  switch(action.type){
    case GET_CAMPUSES:
      return Object.assign({}, state, {campuses : action.campuses})
    case GET_STUDENTS:
     return Object.assign({}, state, {students : action.students})
    case GET_CAMPUS:
      return Object.assign({}, state, {selectedCampus : action.campus})
    case GET_STUDENT:
      return Object.assign({}, state, {selectedStudent : action.student})
    default:
      return state;
  }
}

const store = createStore(reducer)
export default store;

