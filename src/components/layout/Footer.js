import { Link } from 'react-router-dom'
import logo from '../../img/logo-no-back-01-1536x531.png'
function Footer() {
    return <footer>
        <Link to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <ul>
            <h4>Company</h4>
            <li>
                <Link to='/'>About Us </Link>
            </li>
            <li>
                <Link to='/'>Blog </Link>
            </li>
            <li>
                <Link to='/'>FAQs </Link>
            </li>
            <li>
                <Link to='/'>How To </Link>
            </li>
            <li>
                <Link to='/'>DCA </Link>
            </li>
            <li>
                <Link to='/'>Referral Leader board</Link>
            </li>
        </ul>
        <ul>
            <h4>Legal</h4>
            <li>
                <Link to='/'>Terms Of Service</Link>
            </li>
            <li>
                <Link to='/'>Privacy Policy</Link>
            </li>
        </ul>
        <ul>
            <h4>Connect With Us</h4>
            <li>
                <Link to='/'>
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                    Facebook
                </Link>
            </li>
            <li>
            <Link to="/">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                    Twitter
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                    Instagram
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i class="fab fa-telegram" aria-hidden="true"></i>
                    Telegram
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    LinkedIn
                </Link>
            </li>
        </ul>
    </footer>
}
export default Footer;