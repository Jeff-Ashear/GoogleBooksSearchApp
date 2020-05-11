// global variables
import React, { Component } from 'react';
import axios from "axios";

class SavedComponent extends Component {

    componentDidMount() {
        this.dbQuery();
    }

    dbQuery = () => {
        ajax({
            method: 'POST',
            url: '/save-book',
            data: {
               title: "The Name of the Wind",
               author: "Patrick Rothfuss",
               description: "A coming of age tale set in a world with rich characters, an interesting set of rules for it's magic, and a fresh take on high fantasy.",
               image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FName-Wind-Patrick-Rothfuss%2Fdp%2F0756404746&psig=AOvVaw1b8yp4Zc2PaoqaxbqX5HdM&ust=1589082245493000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj5x-jupekCFQAAAAAdAAAAABAW"
        },
        })
            .then(function(response) {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <p>I can display saved books in the future.</p>
            </div>
        )
    }
}

 export default SavedComponent;