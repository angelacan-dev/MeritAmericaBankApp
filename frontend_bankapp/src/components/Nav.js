import React from 'react'
import { Link } from 'react-router-dom'

// const Nav = (props: { firstName: string, setFirstName: (firstName: string) => void }) => {
const Nav = (props) => {
    const logout = async () => {
        await fetch('/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // to get the cookies from the backend need to set credentials:
            credentials: 'include',
        });

        props.setFirstName('');
    }

    let menu;

    if (props.firstName === '') {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Login</a> */}
                    <Link to='/login' className="nav-link active">Login</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Login</a> */}
                    <Link to='/register' className="nav-link active">Register</Link>
                </li>
            </ul>
        /* <form className="d-flex">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-outline-success" type="submit">Search</button>
</form> */
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#">Login</a> */}
                    <Link to='/login' className="nav-link active" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
}



return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand" href="#">Home</Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarCollapse"> */}
            <div>
                {menu}
            </div>
        </div>
    </nav>
)
}

export default Nav
