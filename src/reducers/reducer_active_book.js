// state argument is not app state
// only state this reducer is responsible form
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;

}
// switch case, if case, return action.payload
// else return state
