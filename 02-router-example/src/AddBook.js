import React ,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const contactsAPI = "https://5be81d528d650800131e274d.mockapi.io/api/v1/book/";		

class AddBook extends Component{


	constructor(props){
		super(props);
		this.state = {
			message : "" 
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onSubmit(event){
		event.preventDefault();
		this.onAdd(this.nameInput.value,this.authorInput.value,this.publisherInput.value, this.descriptionInput.value);
	}

	onAdd(name,author,publisher,description){
		
		let data = {
			"name": name,
			"author":author,
			"publisher":publisher,
			"description" : description
		};

		fetch(contactsAPI,{
			headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
			method: "post",
			body: JSON.stringify(data)
		}).then(response => 
			{
				if(response.ok)
					this.setState({ message : "Book is created"})
				else
					this.setState({ message : "Book is not created"})
			}
		);
	}

	render(){

		let info;

		if (this.state.message){
			info = <Alert color="primary">
		    	{this.state.message}
			</Alert>
		}

		return(
			<div className="container">
			<br/>
			<h3>Create Book</h3>
			{info}
			<Form onSubmit={this.onSubmit}>
		        <FormGroup>
		          <Label for="name">Book Name</Label>
		          <Input type="text" name="name" id="name" placeholder="Book Name" innerRef={nameInput => this.nameInput = nameInput}/>
		        </FormGroup>
		        <FormGroup>
		          <Label for="author">Book Author</Label>
		          <Input type="text" name="author" id="author" placeholder="Book Author" innerRef={authorInput => this.authorInput = authorInput}/>
		        </FormGroup>
		        <FormGroup>
		          <Label for="publisher">Book Publisher</Label>
		          <Input type="text" name="publisher" id="publisher" placeholder="Book Publisher" innerRef={publisherInput => this.publisherInput = publisherInput}/>
		        </FormGroup>
		        <FormGroup>
		          <Label for="description">Book Description</Label>
		          <Input type="textarea" rows="10" name="description" id="description" placeholder="Book Publisher" innerRef={descriptionInput => this.descriptionInput = descriptionInput}/>
		        </FormGroup>
		        <Button>Submit</Button>
		        </Form>
      		</div>
		);
	}
}

export default AddBook;