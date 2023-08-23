import React, {useState} from "react";

function TodoItem(props){

    return (
        <div onClick={() => {
            props.onChecked(props.id)
        }           
        }>
            <li >
                {props.Text}
            </li>
        </div>
    ) 
}

export default TodoItem;