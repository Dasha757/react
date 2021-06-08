import React, { Component } from 'react';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        if (user != undefined) {
            return (
                <div>
                    <h3 align = "center">Information about user</h3>
                    <ul>
                        <li>Id: {user.id}</li>
                        <li>Name: {user.name}</li>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                        <li>Website: {user.website}</li>
                    </ul>
                    <p  align = "center">Address</p>
                    <ul>
                        <li>Street: {user.address.street}</li>
                        <li>Suite: {user.address.suite}</li>
                        <li>City: {user.address.city}</li>
                        <li>Zipcode: {user.address.zipcode}</li>
                        <li>Geo: lat {user.address.geo.lat}, lng {user.address.geo.lng}</li>
                    </ul>
                    <p  align = "center">Company</p>
                    <ul>
                        <li>Name: {user.company.name}</li>
                        <li>Catch phrase: {user.company.catchPhrase}</li>
                        <li>Bs: {user.company.bs}</li>
                    </ul>
                </div>
            );
        }
        return (
            <div>
            </div>
        )
    }
}
