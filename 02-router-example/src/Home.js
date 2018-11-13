import React, { Component } from 'react';
import {Table,Input} from 'reactstrap'
import { Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const contactsAPI = "https://5be81d528d650800131e274d.mockapi.io/api/v1/book";		


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			book:[],
			search : "",
			currentPage: 1,
			bookPerPage: 2
		};

		this.onChange = this.onChange.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
	}

	// API dan gelen dataları aldık ve book statein içine koyduk.
	componentWillMount(){

		fetch(contactsAPI)
		.then(response => { return response.json();
		}).then(
			data => this.setState({
					book : [data]
				})

			);
	}

	onChange(event){
		this.setState({ search : event.target.value});
	}


	handlePageClick(event){
		this.setState({
			currentPage : Number(event.target.id)
		});
	}



	render() {
		const {book,search,currentPage,bookPerPage} = this.state;
		const filterBooks = this.state.book.map(
				books =>  books.filter(book =>{
					return book.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
					book.author.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
					book.publisher.toLowerCase().indexOf(search.toLowerCase()) !== -1 
				}
			));

		const indexOfLastBook = currentPage * bookPerPage;
		const indexOfFirstBook = indexOfLastBook - bookPerPage;
		const currentBook = filterBooks.map( book =>{ 
								return book.slice(indexOfFirstBook,indexOfLastBook)
							});


		const renderBook = currentBook.map(books => 
				books.map(book => 
				<tr key={book.id}>
					<td>{book.name}</td>
					<td>{book.author}</td>
					<td>{book.publisher}</td>
					<td><Link to={"/detail/"+book.id}>Detail</Link></td>
				</tr>
			))

		const pageNumbers = [];
		
		for (let i = 1;i <= Math.ceil(book.map(books => {return books.length}) / bookPerPage); i++){
			pageNumbers.push(i);
		}

		
		const renderPageNumbers = pageNumbers.map(number => {
			return (
				
			        <PaginationItem key={number}>
			          <PaginationLink href=""
			         	
	              		id={number}
	              		onClick={this.handlePageClick}
	              		>
			            {number}
			          </PaginationLink>
			        </PaginationItem>
			        
          	);
		});

		return (
	   		    <div className = "container">
    		    <br/>
	      		<h3>Books</h3>
	      		<Input label="Search Book" icon="search" onChange = {this.onChange} />
	      		<br/>		
					<Table>
					<thead>
						<tr>
							<th>Book Name</th>
							<th>Book Author</th>
							<th>Book Publisher</th>
							<th>Book Detail</th>
						</tr>
					</thead>
					<tbody>
						{renderBook}
					</tbody>
					</Table>
					<Pagination aria-label="Page navigation example">
				        <PaginationItem >
				          	<PaginationLink previous href="" />
				        </PaginationItem>
		              	{renderPageNumbers}
		              	<PaginationItem>
				          	<PaginationLink next href="" />
				        </PaginationItem>
			    	</Pagination>
				</div>
		);
	}
}

export default Home;
