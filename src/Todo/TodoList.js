import React, { Component } from 'react';
import Pagination from './Pagination';
import TodoItem from './TodoItem';

const styles = {
    formIn: {
        position: 'relative',
        left: '25%',
        margin: '5px'
    },
    input: {
        width: '450px',
        height: '40px',

    },
    add: {
        position: 'absolute',
        height: '40px'

    },
    container: {
        position: 'relative',
        marginLeft: '220px',
        width: '1100px'
    }
};

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            inputValue: '',
            currentPage: 1,
            todoPerPage: 10
        };
        this.onCheckedTodo = this.onCheckedTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.getCurrentPage = this.getCurrentPage.bind(this);
    }

    onCheckedTodo(id) {
        let todos = this.state.todos.map((value) => {
            if (value.id === id) {
                value.complete = !value.complete;
            }
            return value;
        })
        this.setState({ todos });
    }

    addTodo(event) {
        event.preventDefault();
        if (this.state.inputValue <= 0) {
            alert('Заполните значение');
        }
        else {
            let todos = this.state.todos.concat([{
                title: this.state.inputValue,
                id: Math.floor(Math.random() * 1000),
                complete: false
            },
            ]);
            this.setState({ todos })
        }
    }

    deleteTodo(id) {
        let todos = this.state.todos.filter(val => {
            return val.id !== id;
        })
        this.setState({ todos: todos });
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => this.setState({ todos: res }));
    }

    getCurrentPage(num) {
        this.setState({ currentPage: num });
    }


    render() {
        const { todos } = this.state;
        const indexLastTodo = this.state.currentPage * this.state.todoPerPage;
        const indexFirstTodo = indexLastTodo - this.state.todoPerPage;
        const currentTodos = todos.slice(indexFirstTodo, indexLastTodo);

        return (
            <div className="container row" style={styles.container}>
                <ul className="list-group">
                    <form style={styles.formIn} onSubmit={this.addTodo}>
                        <input style={styles.input} placeholder='type here...' onChange={(event) => { this.setState({ inputValue: event.target.value }) }} />
                        <button style={styles.add} className="btn btn-primary" type="submit">Add</button>
                    </form>
                    {currentTodos.map((val) => {
                        return <TodoItem todo={val} key={val.id} checked={this.onCheckedTodo} deleteTodo={this.deleteTodo} />;
                    })}
                    <Pagination todoPerPage={this.state.todoPerPage} allTodos={this.state.todos.length} getCurrentPage={this.getCurrentPage} />
                </ul>
            </div>
        );
    }
}