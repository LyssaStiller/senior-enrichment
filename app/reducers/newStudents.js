const WRITE_STUDENT= 'WRITE_STUDENT';

// ACTION CREATORS

export function writeStudent (student) {
  const action = { type: WRITE_MESSAGE, student };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_STUDENT:
      return action.student;

    default:
      return state;
  }

}
