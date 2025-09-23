import React, { Component } from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

export class Navbar extends Component {
    render() {
        const navClass =
            this.props.mode === "dark"
                ? "navbar navbar-expand-lg navbar-dark bg-dark"
                : "navbar navbar-expand-lg navbar-light bg-light";
        return (
            <div>
                <nav className={navClass}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">FactFlash</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about">About Us</a>
                                </li>
                            </ul>
                            <button
                                className="btn btn-outline-secondary ms-2"
                                onClick={this.props.toggleMode}
                                style={{ fontSize: "1.3rem", display: "flex", alignItems: "center" }}
                                aria-label="Toggle dark/light mode"
                            >
                                {this.props.mode === "dark" ? <FaSun /> : <FaMoon />}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
