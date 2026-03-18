import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-2">
      <div className="container footer-grid">
        <div className="footer-col about-col">
          <Link to="/" className="brand" style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
            <img src="/assets/images/logo.png" alt="Lumenova Foundation Logo" className="brand-logo" />
          </Link>
          <p className="footer-desc mt-1">
            Build a healthier and safer community where every mother, child, and family has access to quality health awareness, preventive care, and early screening services.
          </p>
          <div className="social-links mt-1">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/lumenovafoundation" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/impact">Our Impact</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/blog">Health Articles</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col links-col">
          <h3>Our Programs</h3>
          <ul>
            <li><Link to="/programs">Maternal Health</Link></li>
            <li><Link to="/programs">Child Health</Link></li>
            <li><Link to="/programs">Preventive Care</Link></li>
            <li><Link to="/programs">Health Camps</Link></li>
            <li><Link to="/programs">Volunteer Training</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Detail</h3>
          <ul className="contact-info">
            <li>
              <MapPin className="contact-icon" size={20} />
              <span>New Bali Bazaar<br/>Chhindwara,Madhya Pradesh, India 480001</span>
            </li>
            <li>
              <Phone className="contact-icon" size={20} />
              <span>+91 898900468</span>
            </li>
            <li>
              <Mail className="contact-icon" size={20} />
              <span>lnfoundation074@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} Lumenova Foundation. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
