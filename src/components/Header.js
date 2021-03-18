import React from "react";
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://rollingcodeschool.com/wp-content/uploads/2019/12/ingenia-logo-transparencia_Mesa-de-trabajo-1-copia-e1575648427572.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}
