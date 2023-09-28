import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
    return (
        <Link className="navigation-logo" to="/">
            <img src={logo} alt="logo" />
        </Link>
    )
}

export default NavbarLogo