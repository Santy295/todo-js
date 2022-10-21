import { Todo } from './todo.class';

export class TodoList{
    constructor() {
        
        // this.todos = [];
        this.cargarLocalStorage();

    };

    nuevoTodo(todo) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    };

    eliminarTodo(id) {
        this.todos = this.todos.filter( todo => todo.id != id )
        this.guardarLocalStorage();
    };

    marcarCompletado(id) {
        for( const todo of this.todos ) {
            if(todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    };

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    };

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos)); // Stringify transforma el objeto en un string para poder ser leido por el localstorage

    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse(localStorage.getItem('todo'))
                        :[];
        
        this.todos = this.todos.map( Todo.fromJson )
        // Cuando es el unico elemento el que se exporta puede excluirse en la sintaxis 
    }
}