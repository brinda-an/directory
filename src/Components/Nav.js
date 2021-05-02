import React from "react";
import {Link} from "react-router-dom";

const Nav =() => {
    return(
        <nav>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/add"><li>Add Details</li></Link>
                <Link to="/view"><li>List Data</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;