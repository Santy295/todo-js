import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

// Cuando es el unico elemento el que se exporta puede excluirse en la sintaxis 
// todoList.todos.forEach(todo => crearTodoHtml(todo)); LO MISMO QUE ABAJO
todoList.todos.forEach(crearTodoHtml);
