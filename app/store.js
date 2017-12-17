import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import axios from 'axios'
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

//note to self
const initialState = {
  campuses : [],
  students : [],
  currentCampus: {},
  currentStudent: {},
  newStudent: {},
  newCampus: {name: "", description: ""}
}

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const GET_STUDENT = 'GET_STUDENT'
const WRITE_STUDENT = 'WRITE_STUDENT'
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME'
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION'
const REMOVE_STUDENT = 'REMOVE_STUDENT'
const REMOVE_CAMPUS = "REMOVE_STUDENT"
// const POST_STUDENT = "POST_STUDENT"
// const POST_CAMPUS = "POST_CAMPUS"
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
    campus: campus
  }
}

export function getStudent (student){
  return {
    type: GET_STUDENT,
    student
  }
}


export function writeStudent(content) {
  const action = { type: WRITE_STUDENT, newStudent: content };
  return action;
}


export function writeCampusName(propName, campusContent) {
  let campus = {}
  campus[propName] = campusContent
  const action = {
    type: WRITE_CAMPUS_NAME,
    campus
  };
  return action;
}



export function writeCampusDescription(propName, campusContent) {
  let campus = {}
  campus[propName] = campusContent
  const action = {
    type: WRITE_CAMPUS_DESCRIPTION,
    campus
  };
  return action;
}


export function removeStudent(student) {
  const action = { type: REMOVE_STUDENT, student };
  return action;
}

export function removeCampus(campus) {
  const action = { type: REMOVE_CAMPUS, content };
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

export function postCampus(campus){

  return function thunk(dispatch){
    return axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      const action = getCampuses(newCampus)
      dispatch(action)
    });
  }
}


export function postStudent(student){

    return function thunk(dispatch){
      return axios.post(`/api/students`, student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent)
        dispatch(action)
      });
    }
  }



//ACTION REDUCER
function reducer(state = initialState, action){
  switch(action.type){
    case GET_CAMPUSES:
      return Object.assign({}, state, {
        campuses: state.campuses.concat(action.campuses)});

    case GET_STUDENTS:
     return Object.assign({}, state, {
       students: state.students.concat(action.students)});

    case GET_CAMPUS:
      return Object.assign({}, state, {currentCampus : action.campus});

    case GET_STUDENT:
      return Object.assign({}, state,{currentStudent: action.student});

    case WRITE_STUDENT:
      return Object.assign({}, state, {newStudent: action.newStudent});
    case WRITE_CAMPUS_NAME:
      return Object.assign({}, state, {newCampus: action.campus});
    case WRITE_CAMPUS_DESCRIPTION:
      return Object.assign({}, state, {newCampus: action.campus});

    // var newState = {...state};
    // newState[action.field.input.name] = action.field.input;
    // return newState
    // ...contact,
    // [propertyName]: event.target.value
    //Object.assign({}, state, {newCampus: action.newCampus});
    // case REMOVE_STUDENT :
    // return Object.assign({}, state, {students: state.students.slice(0).splice((id-1))});
    // case REMOVE_CAMPUS:
    // return Object.assign({}, state, {campuses: state.campuses.slice(0).splice((id-1))})
    // case POST_STUDENT:
    // return Object.assign({}, state, {students: state.campuses.concat(action.students)});
    // case POST_CAMPUS :
    // return Object.assign({}, state, {campuses: state.students.concat(action.students)});


    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

export default store;
