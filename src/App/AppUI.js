import React from 'react';
import Swal from 'sweetalert2';

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(){

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    return (
    <React.Fragment>

        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {error && <TodosError error={error}></TodosError>}
            {loading && <TodosLoading></TodosLoading>}
            {(!loading && !searchedTodos.length) && <EmptyTodos></EmptyTodos>}

            {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>

        {/* Si openModal es true renderiza lo que hay dentro de los parentesis*/}
        {!! openModal && (
        <Modal>
            <TodoForm/>
        </Modal>)}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />

    </React.Fragment>
    );
}

export { AppUI };