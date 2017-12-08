
// ACTION TYPES

const WRITE_CAMPUS = 'WRITE_CAMPUS';

// ACTION CREATORS

export function writeCampus (campus) {
  const action = { type: WRITE_CAMPUS, campus};
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_CAMPUS:
      return action.campus

    default:
      return state;
  }

}
