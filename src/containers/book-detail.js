import React, { Component } from 'react';
import { connect } from 'react-redux';

  class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>select a book to get started</div>;
    }//if props.book is null

    return (
      <div>
        <h3>Details for:</h3>
        <div>title: {this.props.book.title}</div>
        <div>pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
