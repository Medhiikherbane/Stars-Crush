import { Link } from "react-router-dom"

function Header() {
    return (
      <>
       <nav>
        <ul>
          <li>
            <Link to="/home" >Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      </>
    )
  }
  
  export default Header