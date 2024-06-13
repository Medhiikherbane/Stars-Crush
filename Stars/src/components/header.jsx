import { Link } from "react-router-dom"
import "./header.css"
import logoImage from "../Images/LogoOfficial.png"

function Header() {
    return (
      <>
       <nav className="navbar">
        <img className="logoNavbar" src={logoImage} alt="logo" />
        <ul className="link_page">
          <li className="link_item">
            <Link className="link_item_clic" to="/" >Home</Link>
          </li>
          <li className="link_item">
            <Link className="link_item_clic" to="/search">Search</Link>
          </li>
          <li className="link_item">
            <Link className="link_item_clic" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      </>
    )
  }
  
  export default Header