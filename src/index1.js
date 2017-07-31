import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

console.clear();

	const options = {
	  apiURL: "https://pogoda.ngs.ru/api/v1/cities/",
	  	}




    class TodoApp extends React.Component {
      constructor() {
        super();
        this.state = {
          todos: ['a','b','c','d','e','f','g','h','i','j','k'],
          currentPage: 1,
          todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

      render() {
        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            
             <button key={number}
              id={number}
              onClick={this.handleClick}>
 				 {number}
				</button>
          
          );
        });

        return (
          <div>
            <ul>
              {renderTodos}
            </ul>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        );
      }
    }


    ReactDOM.render(
      <TodoApp />,
      document.getElementById('content')
    );
registerServiceWorker();
