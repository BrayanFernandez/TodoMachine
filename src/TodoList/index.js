import React from 'react';
// import { Children } from 'react/cjs/react.production.min';
import './TodoList.css';

function TodoList(props){

    return(
        <section>
            <ul>
                {props.children}
            </ul> 
        </section>
    );
}

export { TodoList };