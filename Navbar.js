import React from 'react'
 import './Nav.css'
import logo from './Components/images/API.png'
import { Link } from 'react-router-dom'
 
export default function Navbar() {
  return (
    <>
   
     <nav className="navbar navbar-expand-lg">
    <div className="container-fluid" id='oo'>
      <a className="navbar-brand" href="#"><img src={logo} alt="./" className='img-fluid'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
        {/* <li className="nav-item " >
            <Link className= " nav-link" to='./login' id='j'>Login</Link>
          </li> */}
          <li className="nav-item">
            <Link className='nav-link'to='/home'id='j'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='./aboutus'id='j'>Aboutus</Link>
          </li>
          <li className="nav-item">
            <Link  className='nav-link'to='./contact'id='j'>Contact</Link>
          </li>
          <li className="nav-item">
            <Link  className='nav-link'to='./checkBmi'id='j'>CheckBMI</Link>
          </li>
         
          <li className="nav-item dropdown ">
            <a className=" nav-link dropdown-toggle"id='j' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              API
            </a>
         
            <ul className= "dropdown-menu" style={{textAlign:"center"}} >
        <li><Link to='./login' className='a'>Login</Link></li>
              <li ><Link to='./weather' className='a'>Weather</Link></li>
              <li><Link to='./news' className='a'>News</Link></li>
             
              <li><Link to='./food' className='a'>Food</Link></li>
              <li><Link to='./movie' className='a'>Movie</Link></li>
             <li><Link to='./product' className='a'>Product</Link></li>
           
            </ul>
           
          </li>
         
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
    </>
   
  )
}
 