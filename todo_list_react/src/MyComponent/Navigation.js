import React, { useState } from "react";
import {Link} from 'react-router-dom';

export default function Navigation({onSearch}) {

  let navStyle = {
    borderColor: "blue",
    borderStyle: "solid",
    borderRadius: "10px",
    borderWidth: "2px",
    marginTop: "3px"
  }

  let liStyle = {
    border: "2px solid darkgrey",
    borderRadius: "13px",
    margin: "0px 7px"
  }

  let [search, setSearch] = useState('');

  function searchValue(e) {
    e.preventDefault();
    onSearch(search);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={navStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{"color": "darkBlue"}}>To do List</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={liStyle}>
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item" style={liStyle}>
                <Link className="nav-link active" to="/about">About</Link>
              </li>

            </ul>
            <form className="d-flex" role="search" onSubmit={e=>searchValue(e)}>
              <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=>(setSearch(e.target.value))} aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}