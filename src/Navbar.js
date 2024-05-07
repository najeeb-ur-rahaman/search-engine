import { Link, useMatch, useResolvedPath } from "react-router-dom"
import book_generated from './Assests/book_generated.jpg'
import { useState } from "react"
import Home from "./components/Home1" 
import SingnupPage from "./components/SingnupPage"
export default function Navbar() {


  return (
    <div>
      <div style={{backgroundColor:"#91E343",height:"40px",borderRadius:"10px"}}>

      </div>
    <nav className="nav">
      {/* <img src={book_generated} alt=""></img> */}
      
      <Link to="/" className="site-title">
      <img src={book_generated} width={35} height={35} alt='Large Pizza' />Academic Search Engine
      </Link>
       <ul>
        
        <CustomLink to="/logout">Logout</CustomLink> 
        {/* <CustomLink to="/signup1">Signup</CustomLink> */}
      </ul>
    </nav>
    </div>
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