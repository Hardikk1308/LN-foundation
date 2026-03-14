import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <Link to="/" className="brand">
          <img src="/assets/images/logo.png" alt="Lumenova Foundation Logo" className="brand-logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
          <NavLink to="/programs" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Programs</NavLink>
          <NavLink to="/impact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Our Impact</NavLink>
          <NavLink to="/get-involved" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Get Involved</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/donate" className="btn btn-primary nav-donate">
            Donate Now
          </Link>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className="mobile-link">Home</NavLink>
          <NavLink to="/about" className="mobile-link">About Us</NavLink>
          <NavLink to="/programs" className="mobile-link">Programs</NavLink>
          <NavLink to="/impact" className="mobile-link">Our Impact</NavLink>
          <NavLink to="/get-involved" className="mobile-link">Get Involved</NavLink>
          <NavLink to="/blog" className="mobile-link">Blog</NavLink>
          <NavLink to="/contact" className="mobile-link">Contact</NavLink>
          <Link to="/donate" className="mobile-link mobile-donate">Donate Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
