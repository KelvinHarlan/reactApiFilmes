import './nav.css';
import {Link} from 'react-router-dom';

function Nav (){
    return (
        <div className='navBar'>
            <div className='logo'>Films<span className='pointerLogo'>.</span></div>
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

