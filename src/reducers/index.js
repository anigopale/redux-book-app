import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});
// keys added to combineReducers are added to global state
export default rootReducer;
