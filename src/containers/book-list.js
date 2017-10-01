import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((books) => {
      return (
        <li key={books.title} className="list-group-item">{books.title}</li>
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
  return {
    books:state.books
  }
}
 //maps state to props of the container
 // container re-renders if appstate changes
 // the returned object must contain the required props as keys

 export default connect(mapStateToProps)(BookList);
 // connects returned props to component BookList
 // this is exported instead of plain component
