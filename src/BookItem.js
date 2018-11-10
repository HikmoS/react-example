import React, { Component } from 'react';

class BookItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEdit: false
    };
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete(){
    const {onDelete,bookName} = this.props;
    onDelete(bookName);
  }

  onEdit(){
    this.setState({ isEdit:true});
  }

  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.authorInput.value, this.publisherInput.value,this.props.bookName);
    this.setState({isEdit : false});
  }

  render() {
    const { bookName,bookAuthor,bookPublisher, onDelete} = this.props;
    return (
      <div>
      {
        this.state.isEdit
        ?(
          <form onSubmit={this.onEditSubmit}>
            <input placeholder="Book Name"  ref={nameInput=>this.nameInput = nameInput} defaultValue={bookName}/>
            <input placeholder="Book Author" ref = {authorInput=>this.authorInput = authorInput} defaultValue={bookAuthor}/>
            <input placeholder="Book Publisher" ref = {publisherInput=>this.publisherInput = publisherInput } defaultValue={bookPublisher}/>
            <button>Edit Book</button>
          </form>
        )
        :(
          <div>
            <span>{bookName} </span>
            <span>{bookAuthor} </span>
            <span>{bookPublisher} </span>
            <button onClick={this.onDelete}>Delete</button>
            <button onClick={this.onEdit}>Edit</button>
          </div>
        )
      }
      </div>
    );
  }
}

export default BookItem;
