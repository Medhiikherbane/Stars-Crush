import { Link } from "react-router-dom"
import './header.css'

function Header() {
    return (
      <>
       <nav className="navbar">
        <img src="#" alt="logo Stars Crush" />
        <ul className="link_page">
          <li className="link_item">
            <Link className="link_item_clic" to="/home" >Home</Link>
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