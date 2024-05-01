import { Link, useMatch, useResolvedPath } from "react-router-dom"
import book_generated from './Assests/book_generated.jpg'
export default function Navbar() {
  return (
    <nav className="nav">
      {/* <img src={book_generated} alt=""></img> */}
      
      <Link to="/" className="site-title">
      <img src={book_generated} width={35} height={35} alt='Large Pizza' />Academic Search Engine
      </Link>
       <ul>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup1">Signup</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}