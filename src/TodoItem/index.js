// librerias
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// De react por defecto
import React from 'react';
// import { Children } from 'react/cjs/react.production.min';
// mis archivos
import './TodoItem.css';


function TodoItem(props){

    // const onComplete = () => {
    //     // alert('se completo el todo' + props.text);
    //     Swal.fire(
    //         'ToDo',
    //         'Ha sido completeda '+ props.text,
    //         'success'
    //     );
    // };
    // const onDelete = () => {
        // Swal.fire(
        //     'ToDo',
        //     'ToDo borrado '+ props.text,
        //     'warning'
        // );
    // };

    return(
    <li className="TodoItem">
        <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
        >
            <i className="fas fa-check"></i>
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
        >
            <i className="fas fa-trash-alt"></i>
        </span>
    </li>
    );
}

export { TodoItem };