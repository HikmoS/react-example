import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.nameInput.value,this.authorInput.value,this.publisherInput.value);
    this.nameInput.value = "";
    this.authorInput.value = "";
    this.publisherInput.value = "";
  }


  render() {
    return (
      <div>
        <h3>Add Book</h3>
          <form onSubmit = {this.onSubmit}>
            <input placeholder="Book Name"  ref={nameInput=>this.nameInput = nameInput}/>
            <input placeholder="Book Author" ref = {authorInput=>this.authorInput = authorInput}/>
            <input placeholder="Book Publisher" ref = {publisherInput=>this.publisherInput = publisherInput }/>
            <button>Add Book</button>
          </form>
      </div>
    );
  }
}

export default AddItem;
