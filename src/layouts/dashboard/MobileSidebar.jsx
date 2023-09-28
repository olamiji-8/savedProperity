// import React from "react";
// import { Link } from "react-router-dom";
// import dashboard from "../../assets/images/sidebar-icons/dashboard.png";
// import switch_mode from "../../assets/images/sidebar-icons/switch_mode.png";
// import wallet from "../../assets/images/sidebar-icons/wallet.png";
// import property_data from "../../assets/images/sidebar-icons/property_data.png";
// import saved_property from "../../assets/images/sidebar-icons/saved_property.png";

// const MobileSidebar = ({ location }) => {
//   return (
//     <div className="mobile_sidebar">
//       <div className="container">
//         <ul>
//           <li className={location === "/dashboard" ? "side-link" : null}>
//             <Link to="/dashboard">
//               <img src={dashboard} alt="icon" className="icon" />
//               <p className="name">Dashboard</p>
//             </Link>
//           </li>
//           <li className={location === "/switch" ? "side-link" : null}>
//             <Link to="/switch">
//               <img src={switch_mode} alt="icon" className="icon" />
//               <p className="name">Switch Mode</p>
//             </Link>
//           </li>
//           <li className={location === "/wallet" ? "side-link" : null}>
//             <Link to="/wallet">
//               <img src={wallet} alt="icon" className="icon" />
//               <p className="name">Wallet</p>
//             </Link>
//           </li>
//           <li className={location === "/property-data" ? "side-link" : null}>
//             <Link to="/property-data">
//               <img src={property_data} alt="icon" className="icon" />
//               <p className="name">Property Data</p>
//             </Link>
//           </li>
//           <li className={location === "/saved-property" ? "side-link" : null}>
//             <Link to="/saved-property">
//               <img src={saved_property} alt="icon" className="icon" />
//               <p className="name">Saved Property</p>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MobileSidebar;
