import React, { Component } from 'react';
import './App.css';
import BookItem from './BookItem';
import AddItem from './AddItem';
const books = [
    {
      bookName : 'Olasılıksız',
      bookAuthor : 'Adam Fawer',
      bookPublisher: 'April'
    },
    {
      bookName : 'Oguz Atay',
      bookAuthor : 'Tutunamayanlar',
      bookPublisher: 'İletisim'
    }
];

//Veriler local olarak tutuluyor.
localStorage.setItem('Books',JSON.stringify(books));

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      books:JSON.parse(localStorage.getItem('Books'))
    };

    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  //render edilmeden önce state üzerinde değişiklik yapabilme
  componentWillMount(){
    const books = this.getBooks();
    this.setState({books})
  }

  getBooks(){
    return this.state.books;
  }

  onDelete(name){
    const books = this.getBooks();
    const filtered = books.filter(books => {
      return books.bookName !== name;
    });
    this.setState({books:filtered})
  }

  onAdd(bookName,bookAuthor,bookPublisher){
    const books = this.getBooks();
    books.push({
      bookName ,
      bookAuthor,
      bookPublisher
    });

    this.setState({books})
  }

  onEditSubmit(bookName,bookAuthor,bookPublisher,originalName){
    let books = this.getBooks();
    books = books.map(book => {
      if(book.bookName === originalName){
        book.bookName = bookName;
        book.bookAuthor = bookAuthor;
        book.bookPublisher = bookPublisher;
      }
      return book;
    });
    this.setState({ books });
  }

  render() {
    return (
      <div className="App">
        <h1>Books</h1>
        <AddItem
          onAdd = {this.onAdd}
        />
        <hr />

        <div>
          {this.state.books.map( books =>{
            return(
              <div key={books.bookName}>
                <BookItem
                  key = {books.bookName}
                  bookName = {books.bookName}
                  bookAuthor = {books.bookAuthor}
                  bookPublisher = {books.bookPublisher}
                  onDelete = {this.onDelete}
                  onEditSubmit = {this.onEditSubmit}
                />
              </div>
            )}
          )}
        </div>
      </div>
    );
  }
}

export default App;
