import "./Header.css";
import logo from '../../a-logo.svg';

function Header() {

    return (
        <div className="Header">
            <div className="grid">
                <div className="header-item link link1">Woman</div>
                <div className="header-item link link2">Men</div>
                <div className="header-item link link3">Kids</div>
                <div className="header-item logo">
                    <img src={logo}/>
                </div>

            </div>
        </div>
    )
}

export default Header;