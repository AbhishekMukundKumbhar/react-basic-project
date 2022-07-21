import React from "react";

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top : "30vh",
        left: 0,
        bottom: 0,
        right: 0,
        textAlign: "center"

    }
    return (
        <footer className="card" style={footerStyle}>
            <div className="card-header">
                TO do list
            </div>
            <div className="card-body">
                <h5 className="card-title">To do list</h5>
                <p className="card-text">You can divide your time and manage your time to all works in a day</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </footer>
    )
}