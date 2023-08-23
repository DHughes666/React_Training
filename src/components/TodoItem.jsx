import React, {useState} from "react";

function TodoItem(props){

    const [isDone, setIsDone] = useState(false);

    function handleClick(){
        
    }

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