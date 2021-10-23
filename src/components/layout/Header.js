import { Link } from 'react-router-dom'
import logo from '../../img/logo-no-back-01-1536x531.png'
function Header() {
    return <header className='header'>
            <Link to='/'>
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <nav className="nav">
                <Link to='/'>Home</Link>
                <Link to='/academy'>Academy</Link>
                <Link to='/community'>Community</Link>
            </nav>
            <Link name="#" id="" className="btn btn-green" role="button" to='/get-started'> Get Started </Link>
            <span className='hamburger'>
                <i className='closebtn fa-times'>&times;</i>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" aria-hidden="true"
                    focusable="false" data-prefix="fas" data-icon="bars" className="openNav svg-inline--fa fa-bars fa-w-14" role="img"
                    viewBox="0 0 448 512">
                    <path fill="white"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                </svg>
            </span>
    </header>

}
export default Header;