import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className="container mb-5">
            <hr/>

            <nav className="navbar navbar-expand-lg navbar-light px-0">


                {/* Navbar collapse button */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapses all links and searchbar */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav mx-auto navbar-ul">
                        <li className="nav-item active navbar-li">
                            <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">Home</NavLink>
                        </li>
                        <li className="nav-item navbar-li">
                            <NavLink to="/nyheder" className="navbar_link" activeClassName="navbar_link--active">Nyheder</NavLink>
                        </li>
                        <li className="nav-item navbar-li">
                            <NavLink to="/opretnyhed" className="navbar_link" activeClassName="navbar_link--active">Opret Nyhed</NavLink>
                        </li>
                        <li className="nav-item navbar-li">
                            <NavLink to="/produkter" className="navbar_link" activeClassName="navbar_link--active">Produkter</NavLink>
                        </li>
                        <li className="nav-item navbar-li">
                            <NavLink to="/opretprodukt" className="navbar_link" activeClassName="navbar_link--active">Opret Produkt</NavLink>
                        </li>

                    </ul>


                </div>

            </nav>
            <hr/>
        </div>
    )
}

export default Navbar
