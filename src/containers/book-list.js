import React, { Component } from 'react';

export default class BookList extends Component {
  rendreList(){
    return this.props.books.map((books) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }//for every props.books, arrow function runs taking books as an argument, returns a jsx list element for every book title

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }// renders jsx returned from renderList(), see relderList()
}
