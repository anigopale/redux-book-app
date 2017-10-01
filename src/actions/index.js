export function selectBook(book) {
  // selectBook is an actioncreator, it returns an actions
  // object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}//selectBook is a props of the container BookList
