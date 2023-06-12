import './nav.css';
import {Link} from 'react-router-dom';
import { FaFrog } from "react-icons/fa";


function Nav (){
    return (
        <div className='navBar'>
            <div className='logo'><FaFrog /> <span className='pointerLogo'>Frog</span>Films</div>
            <nav>
                <ul>
                    <li>
                       <Link to={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/categories"} >Categories</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;

