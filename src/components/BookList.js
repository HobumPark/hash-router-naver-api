import React, { Component } from 'react';
import Book from './Book.js';

class BookList extends Component {

    constructor(props){
        super(props);
        this.state={
            bookList:[]
        }
    }
    render(){
        const {bookList}=this.state
        const result=bookList.map(book=>(
            <Book title={book.title}></Book>)
        )
        return(
            <div id="book-list">
                {result}
            </div>
        );
    }
}

export default BookList;