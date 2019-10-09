import React, {Fragment} from 'react';
import UserImg from "../assets/images/user-img-placeholder.jpeg";

const Navbar = () => {
    return ( 

        <Fragment>
        <nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
            <div className="navbar-brand h1 mb-0 text-large font-medium">
                Dashboard Retail 
            </div>
            <div className="navbar-nav ml-auto">
                <div className="user-detail-section">
                <span className="pr-2">Hola, Oscar Cornejo</span>
                <span className="img-container">
                    {/* add image uri here */}
                    <img src={UserImg} className="rounded-circle" alt="user" />
                </span>
            </div>
        </div>
        </nav>


        <nav className="navbar fixed-top nav-secondary is-dark is-light-text">
            <div className="text-medium">Resumen</div>
            <div className="navbar-nav ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle custom-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Seleccionar Periodo
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                </div>

                {/* OCUPAR CON REACT-DROPDOWN */}
                {/* <div className="navbar-nav ml-auto">
                    <div className="Dropdown-root pr-2 custom-dropdown">
                        <div className="Dropdown-control" aria-haspopup="listbox">
                            <div className="Dropdown-placeholder is-selected">Sepiembre 2019</div>
                            <div className="Dropdown-arrow-wrapper">
                                <span className="Dropdown-arrow"></span>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </nav>

        </Fragment>

     );
}
 
export default Navbar;