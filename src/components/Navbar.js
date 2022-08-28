import "./style/Navbar.css"
import Selfie from './svgs/selfie.jpg'

const Navbar = () => {
    return (
      <div className="section navbar">
        <ul>
            <li>
                <img id="selfie" src={Selfie} alt="" />
            </li>
        </ul>
      </div>
    );
  };
  
export default Navbar;