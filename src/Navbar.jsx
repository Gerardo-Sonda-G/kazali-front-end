import {Link,NavLink} from 'react-router-dom'
import './Navbar.css';

function Navbar(){
    return(
        <> 
        <ul>
            <li>  
                <Link to="end-point1">kazali end-points</Link>
            </li>
            <li>
                 <NavLink className={({isActive})=>`a ${isActive ? 'active':''}`} to="end-point1">End-point 1</NavLink>
            </li>
            <li>  
                <NavLink className={({isActive})=>`a ${isActive ? 'active':''}`} to="end-point2">End-point 2</NavLink>
            </li>
        </ul>       
        </>
    )
}

export default Navbar;