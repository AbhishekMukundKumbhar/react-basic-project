import React, { useState } from "react";

export const AddTodo = (props) => {
    let[work, setWork] = useState("");
    let[desc, setDesc] = useState("");

    const onSubmition = (e) =>{
        e.preventDefault();
        if(!work && !desc)
        {
            alert("Please enter valid deatils");
        }else{
        props.addTodo(work,desc);
        setWork('');
        setDesc('');
        }
    }
    return (
        <div className="container">
            <form onSubmit={onSubmition}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Work :</label>
                    <input type="text" className="form-control" value={work} onChange={e=>setWork(e.target.value)} id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description :</label>
                    <input type="text" className="form-control" value={desc} onChange={e=>setDesc(e.target.value)} id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}