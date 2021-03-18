import React from "react";
import Navbar from 'react-bootstrap/Navbar'

export default function Header(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={props.logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}
