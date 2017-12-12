import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import axios from 'axios'
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


const initialState = {
  campuses : [],
  students : [],
  currentCampus: {},
  currentStudent: {},
  newStudent: '',
  newCampus: ''
}

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const GET_STUDENT = 'GET_STUDENT'
const WRITE_STUDENT = 'WRITE_STUDENT'
const WRITE_CAMPUS = 'WRITE_CAMPUS'

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
    student : student
  }
}


export function writeStudent(content) {
  const action = { type: WRITE_STUDENT, content };
  return action;
}


export function writeCampus(content) {
  const action = { type: WRITE_CAMPUS, content };
  return action;
}

//THUNK CREATORS
export function fetchCampuses(){

  return function thunk(dispatch){
    axios.get('/api/campuses/')
    .then(res => res.data)
    .then(campuses => {
      const action = getCampuses(campuses)
      dispatch(action)
    });
  }
}

export function fetchStudents(){

  return function thunk(dispatch){
  axios.get('/api/students/')
  .then(res => res.data)
  .then(students => {
    const action = getStudents(students)
    dispatch(action)
    });
  }
}

export function fetchCampus(){

  return function thunk(dispatch){
    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      const action = getCampus(campus)
      dispatch(action)
    });
  }
}



//ACTION REDUCER
function reducer(state = initialState, action){
  switch(action.type){
    case GET_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses});

    case GET_STUDENTS:
     return Object.assign({}, state, {students: action.students});

    case GET_CAMPUS:
      return Object.assign({}, state, {currentCampus : action.campus});

    case GET_STUDENT:
      return Object.assign({}, state,{currentStudent: action.student});

    case WRITE_STUDENT:
      return Object.assign({}, state, {newStudent: action.content});
    case WRITE_CAMPUS:
      return Object.assign({}, state, {newCampus: action.content});

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

export default store;
