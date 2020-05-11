// global variables
import React, { Component } from 'react';
import axios from "axios";


class SavedComponent extends Component {

    state = {
        books: []
    }
    componentDidMount() {
        this.dbQuery();
    }

    dbQuery = () => {
        axios.get("/books")
            .then((response) => {
                console.log(response);
                this.setState({
                    books: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="container">

                {this.state.books.map((book, index) => (
                    <div className="card" key={index}>
                        <h5 className="card-header" name="title"><span>By: </span>{book.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title" name="author">{book.authors}</h5>
                            <p className="card-text">{book.description}</p>
                            <div className="text-right">
                                <a href={book.link} target="_blank" className="btn btn-primary">View</a>
                                <button onClick={() => this.handleDelete(book.volumeInfo)} target="_blank" className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default SavedComponent;

// axios calls, use the same fields but the names could differ in the db, change save button to delete 