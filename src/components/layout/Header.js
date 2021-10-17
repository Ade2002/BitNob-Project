import { Link } from 'react-router-dom'
import classes from './Header.module.css'
function Header() {
    return<header>
<div class="container">
    
    <Link to='/'>
        <img src="img/logo-no-back-01-1536x531.png" alt="LOgo" />
        </Link>

    <i class="fa fa-bars" aria-hidden="true"></i>
    <i class="fa fa-times" aria-hidden="true"></i>

    <nav>
        <Link to='/'>Home</Link>
        <Link to='/academy'>Academy</Link>
        <Link to='/community'>Community</Link>
    </nav>
    <Link name="#" id="" class="btn btn-primary" role="button" to='/get-started'> Get Started </Link>
</div>
    </header>
}
export default Header;