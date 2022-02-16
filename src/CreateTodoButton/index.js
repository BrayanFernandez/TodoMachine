// librerias
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// Por defecto
import React from 'react';
// Mis archivos
import './CreateTodoButton.css';

function CreateTodoButton(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState); // prevState es una funcion de react que prevee el estado de la variable
    };

    return(
        <button 
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };