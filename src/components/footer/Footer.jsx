import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footerContainer columnFooter">
            <div className='resources'>
                <Link><h4>Resources</h4></Link>
                <Link><h5>Application</h5></Link>
                <Link><h5>Documentation</h5></Link>
                <Link><h5>Systems</h5></Link>
                <Link><h5>FAQ</h5></Link>

            </div>
            <div className='pricing columnFooter'>
                <Link><h4>Pricing</h4></Link>
                <Link><h5>Overview</h5></Link>
                <Link><h5>Affiliate Program</h5></Link>
                <Link><h5>Promotions</h5></Link>
            </div>

            <div className="company">
                <Link><h4>Company</h4></Link>
                <Link><h5>About Us</h5></Link>
                <Link><h5>Blog</h5></Link>
                <Link><h5>Careers</h5></Link>
                <Link><h5>Press</h5></Link>
            </div>

            <div className="social">
            <Link><h4>Social</h4></Link>
            <Link><h5>Facebook</h5></Link>
            <Link><h5>Twitter</h5></Link>
            <Link><h5>Instagram</h5></Link>
            <Link><h5>Linkedin</h5></Link>
            </div>
        </div>
    )
}

export default Footer;