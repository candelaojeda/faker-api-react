import React, { Component } from 'react';

export default class Users extends Component {
    state = {
        users: [],
    };
    async componentDidMount() {
        const res = await fetch("https://fakerapi.it/api/v1/users?_quantity=10");
        const data = await res.json();
        this.setState({ users: data });
    }
    render() {
        return (
            <div>
                <h1>Users here!</h1>
            </div>
        )
    }
}
