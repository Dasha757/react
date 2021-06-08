import React, { Component } from 'react';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todoPerPage, allTodos, getCurrentPage } = this.props;
        const numPage = [];

        for (let i = 1; i <= Math.ceil(allTodos / todoPerPage); i++) {
            numPage.push(i);
        }
        return (
            <div>
                <ul className="pagination">
                    {numPage.map(num => {
                        return (
                            <li className="page-item">
                                <a class="page-link" onClick={() => getCurrentPage(num)} href="#">{num}</a>
                            </li>);
                    })}
                </ul>
            </div>
        );
    }
}