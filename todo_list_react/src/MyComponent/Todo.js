import React from "react";
import { Todoitem } from './Todoitem'

//todo list
export const Todo = (props) => {
    let ulStyle = {
        listStyleType: 'none'
    }
    let h4Style = {
        position: "relative",
        marginLeft: "90px",
        marginTop: "30px"
    }
    let pStyle = {
        position: "relative",
        marginLeft: "90px",
        marginTop: "20px"
    }

    return (
        <div>
            <h4 style={h4Style}>To do lists :</h4>
            {(props.filtered.length === 0)
                ? (props.todolist.length === 0)
                    ? (<p style={pStyle}>list is empty....</p>)
                    : (
                        <ul style={ulStyle}>
                            {props.todolist.map(todo => {
                                return (
                                    <Todoitem todo={todo} key={todo.id} onDelete={props.onDelete} />
                                )
                            })}
                        </ul>)
                : (
                    <ul style={ulStyle}>
                        {props.filtered.map(todo => {
                            return (
                                <Todoitem todo={todo} key={todo.id} onDelete={props.onDelete} />
                            )
                        })}
                    </ul>)
            }
        </div>
    )
}