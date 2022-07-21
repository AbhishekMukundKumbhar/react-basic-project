import React from "react";

export const Todoitem = (props) => {
    return (
        <div className="container">
            <li>
                <h4>{props.todo.work}</h4>
                <p>{props.todo.desc}</p>
                <button className="btn btn-danger" onClick={() => (props.onDelete(props.todo.id))}>Delete</button>
                <hr />
            </li>
        </div>
    )
}