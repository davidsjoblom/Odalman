import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <NavLink to='/'>
                    <div className="navbar-brand">
                        <i className="fa-regular fa-bench-tree"></i> 
                        <span>Odalman Mark & Trädgård</span>
                    </div>
                    
                </NavLink>
                

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link">Start</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/About' className="nav-link">Om Oss</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Contact' className="nav-link">Kontakt</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;