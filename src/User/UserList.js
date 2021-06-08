import React, { Component } from 'react';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const styles = {
    userContainer: {
        position: 'absolute',
        width: '450px',
        left: '40px'
    },
    infoContainer: {
        background: '#d4e2f0',
        position: 'absolute',
        top: '7.5%',
        left: '50%',
        border: '1px solid #0d6efd',
        width: '450px',
        height: '500px',
        padding: '.5rem 1rem',
    }
};

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => this.setState({ user: res }));
    }

    render() {
        return (
            <Router>
                
                <div className="main">
                    <div style={styles.usersContainer} className="container row">
                        <h3>Users</h3>
                        <ul  class="list-group">
                            {this.state.user.map((val) => {
                                return (<Link to={`/users/id/${val.id}`} > {val.username} </Link>);
                            })}
                        </ul>
                    </div>
                    <div style={styles.infoContainer} className="info">
                        <Route path="/users/id/:uID"
                            render={({ match }) => (
                                <UserInfo user={this.state.user.find((u) => u.id == match.params.uID)} />
                            )}
                        />
                    </div>
                </div>
            </Router>
        )
    }
}