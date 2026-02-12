import logo from "../assets/brand_logo.png";
import "../App.css";


const Nav = ()=> {

    return(
        <nav className="container">
    <div className="logo">
      <img src={logo} />
    </div>
      <ul>
        <li href="#" >MENU</li>
        <li href="#" >LOCATION</li>
        <li href="#" >ABOUT</li>
        <li href="#" >CONTACT</li>
      </ul>

   <button type="">Login</button>
   </nav>
    )
}

export default Nav;