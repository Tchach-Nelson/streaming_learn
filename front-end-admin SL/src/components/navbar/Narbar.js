import "./navbar.scss";
import Cookies from 'js-cookie';

function Navbar() {

    return (
        <div className="navbar">
            <div className="logo">
                <img src="images/icone/plume2.svg" />
                <span>Streamming Learn</span>
            </div>
            <div className="icons">
                <i className="fas fa-search icon"></i>
                <i className="fas fa-dove icon"></i>
                <i className="fas fa-expand icon"></i>
                <div className="notification">
                    <b className="fas fa-bell"></b>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="avatar1.jpg" alt="" />
                    <span>{Cookies.get('nom')}</span>
                </div>
                <i className="fas fa-cog icon"></i>
            </div>
        </div>
    )
}

export default Navbar;