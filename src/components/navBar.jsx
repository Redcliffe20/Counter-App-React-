import React from 'react';

// Stateless Functional Component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <nav className="navbar-brand" >
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalcounters}
        </span>
      </nav>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalcounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
