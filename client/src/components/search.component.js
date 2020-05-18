/* global $ */
import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";

class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            books: []
        }
    }

    searchGoogleApi = (e) => {


        e.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=books&key=AIzaSyCPWHozLBx7coB-2XjvA13alHzllLA_b5c`)
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=transall`)
        .then(res=> {
            console.log(res);
            this.setState({
                books: res.data.items
            })
        })
        .catch(err=> {
            console.log(err)
        })
    }

    handleSearchTerm = ({target}) => {
        let {name, value} = target; 
        this.setState({
            [name]: value
        })
    }

    handleSave = ({title, authors, description, infoLink, imageLinks}) => {
        // handle save here and send post to backend
        // contruct the book
        let image = imageLinks.smallThumbnail;
        let link = infoLink;
        let book = {
            title, 
            authors, 
            description, 
            link,
            image
        }
        let imageStyle ={
            width: '40px'
        }
        console.log("saving to backend", book);
        axios.post("/api/books", book)
        .then(res => {
            console.log("saved book, ", res)
        })
        .catch(err=> {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Search a book</label>
                        <input type="text" className="form-control" value={this.state.searchTerm} name="searchTerm" onChange={this.handleSearchTerm}/>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-success" onClick={this.searchGoogleApi}>Search Google Api</button>
                    </div>
                </form>

                {this.state.books.map((book, index) => (
                    <div className="card" key={index}>
                    <h5 className="card-header" name="title"><span>By: </span>{book.volumeInfo.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title" name="author">{book.volumeInfo.authors}</h5>
                        <img className="image" src={book.volumeInfo.imageLinks.smallThumbnail}/>
                        {/* <Image className="image" style={imageStyle} source={image} /> */}
                <p className="card-text">{book.volumeInfo.description}</p>
                        <div className="text-right">
                        <a href={book.volumeInfo.infoLink} target="_blank" className="btn btn-primary">View</a>
                        <button onClick={() => this.handleSave(book.volumeInfo)} target="_blank" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default SearchComponent;