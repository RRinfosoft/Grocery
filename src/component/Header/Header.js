// import React,{useState} from 'react'
// import { Link } from 'react-router-dom';
// import './head.css'


// const Header = () => {
  // const[navbar, setNavbar] = useState(false);
  // const changeBg = () =>{
  //   if(window.scrollY>=100){
  //     setNavbar(true);
  //   }else{
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll",changeBg)
  // <nav className={navbar ?" navbar scroll navbar-expend-sm fixed-top":"navbar navbar-expend-sm fixed-top"}>

//   return (
//     <>

// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNavDropdown"
//       aria-controls="navbarNavDropdown"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Features
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Pricing
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Dropdown link
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>


//     </>
//   )
// }

// export default Header

import Container from 'react-bootstrap/Container';
import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './head.css'
import { Link } from 'react-router-dom';

function BasicExample() {
    const[navbar, setNavbar] = useState(false);
  const changeBg = () =>{
    if(window.scrollY>=100){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };
  window.addEventListener("scroll",changeBg)
  return (
    // <Navbar id='navbar-bg' expand="lg">
      <Navbar id='navbar-bg'  className={navbar ?" navbar scroll navbar-expend-sm fixed-top":"navbar navbar-expend-sm fixed-top"}>

      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <div className='logo-img '>
          <img className='fill-logo-img' src='image/logo.png' />
        </div>
        <Navbar.Brand  className='brands'>Fruitkha</Navbar.Brand> 
        <Navbar.Brand  className='brands2'>Fress fruit Online</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
         
            <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/home2">Home Slider</NavDropdown.Item>
            </NavDropdown>

            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/news" className='nav-link'>News</Link>
            <Link to="/shop" className='nav-link'>Shop</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>

            {/* <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/">Cart</NavDropdown.Item>
              <NavDropdown.Item href="/">Chek Out</NavDropdown.Item>
              <NavDropdown.Item href="/about">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/">News</NavDropdown.Item>
              <NavDropdown.Item href="/about">Shop</NavDropdown.Item>
            </NavDropdown> */}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;