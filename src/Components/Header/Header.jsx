import logo from "../../assets/img/logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <img src={logo} alt=""/>
            <nav>
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
            </nav>
        </header>
    )
}

export default Header;