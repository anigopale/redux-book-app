import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }//for every props.books, arrow function runs taking books as an argument, returns a jsx list element for every books.title

  render() {
    return (
      <ul className="listgroup col-sm-4">
        {this.renderList()}
      </ul>
    )
  }// renders jsx returned from renderList(), see relderList()
}

function mapStateToProps(state) {
  //maps state to props of the container
  // container re-renders if appstate changes
  // the returned object must contain the required props as keys
  return {
    books:state.books
  }
}

//anything returned from tis function will end up as props
// on the Booklist container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called,
  // result should b epassed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}


 export default connect(mapStateToProps, mapDispatchToProps)(BookList);
 // connects returned props to component BookList
 // this is exported instead of plain component
// promotes BookList from a component to container, needs mapStateToProps
// dispatch method selectBook, make it available as props.
