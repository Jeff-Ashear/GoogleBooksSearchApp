import React, { Component } from 'react';

class SavedComponent extends Component {

    componentDidMount() {
        this.dbQuery();
    }

    dbQuery = () => {
        $.ajax({
            method: 'POST',
            url: '/create-person',
            data: {
                name: 'John' // for example: push the value of an input to the server instead
            },
        })
            .then(function(res) {
                console.log(res);
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