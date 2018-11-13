import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const contactsAPI = "https://5be81d528d650800131e274d.mockapi.io/api/v1/book/";		


class DetailBook extends Component {

	constructor(props){
		super(props);
		this.state = {
			detail : []
		};
	}

	componentWillMount(){
		fetch(contactsAPI + this.props.match.params.id)
		.then(response => {return response.json();})
		.then(
				data => this.setState({detail : data})
			);
	}

	render() {

		let book = this.state.detail;

    	return (
		    <div className = "container">
		    <br/>
		    <h3>{book.name} Detail</h3>
		    <br/>
				<Card>
			        <CardBody>
			          <CardTitle><b>Book Name : {book.name}</b></CardTitle>
			          <CardSubtitle>Book Author : {book.author}</CardSubtitle>
			          <p>Book Publisher : {book.publisher}</p>
			          <CardText>Book Description : {book.description}</CardText>
			        </CardBody>
		    	</Card>
			</div>
		);
	}
}

export default DetailBook;
