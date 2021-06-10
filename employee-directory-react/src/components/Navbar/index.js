import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbra-brand" to="/">
        Company Directory
        </Link>
    </nav>
)
};

export default NavBar;