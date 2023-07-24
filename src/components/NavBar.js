// //rafce

// import React from 'react'
// import { Link } from "react-router-dom";


// const NavBar = () => {
//     return (
//     <>
//             <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
//                 <div class="container-fluid">
//                     <Link className="navbar-brand" to="/">
//                         navbar
//                     </Link>
//                     <div className="collapse navbar-collapse">
//                         <ul className="navbar-nav me-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">
//                                     Contact
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">
//                                     About
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </>
//             );
// };

// export default NavBar;



import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>  
            </ul>
            {/* mx->gives space */}
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

// import React from "react";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   return (
//     <>
//     navbar
//     </>
//       );
//     };
//     export default NavBar;