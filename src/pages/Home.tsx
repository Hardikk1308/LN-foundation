import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Stethoscope, Baby, ShieldCheck } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src="/assets/images/medical_camp_2.jpg" alt="Lumenova Foundation Health Camp Group" style={{ filter: 'brightness(0.7)' }} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="tag">Small Action, Bright Impact</span>
            <h1>Building Healthier Communities Through Awareness and Prevention</h1>
            <p>Empowering mothers, children, and families with access to quality health awareness, preventive care, and early screening services across India.</p>
            <div className="hero-actions">
              <Link to="/donate" className="btn btn-primary">Make a Donation <ArrowRight size={20}/></Link>
              <Link to="/get-involved" className="btn btn-outline">Join as Volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="title">Our Mission</h2>
              <p className="subtitle">Mission of Lumenova Foundation, 
“The mission of Lumenova Foundation is to strengthen community health systems by ensuring accessible, affordable, and quality healthcare services at the grassroots level.
We are dedicated to organizing general health check-ups, supporting maternal and adolescent health services, and promoting awareness on preventive care including cancer screening, to build a healthier and more informed rural community.”</p>
              <ul className="mission-list">
                <li><HeartPulse className="mission-icon" /> Empower pregnant women with knowledge for safe institutional delivery</li>
                <li><Baby className="mission-icon" /> Improve newborn and child health via caregiver education</li>
                <li><ShieldCheck className="mission-icon" /> Promote early detection of NCD (diabetes, hypertension & cancer)</li>
                <li><Stethoscope className="mission-icon" /> Support government programs </li>
              </ul>
              <Link to="/about" className="btn btn-outline mt-2">Learn More About Us</Link>
            </div>
            <div className="mission-image-wrapper">
              <img src="/assets/images/nursing_training_5.png" alt="Lumenova Foundation awareness at Narsinghpur Nursing Training Centre" className="mission-image" style={{ borderRadius: 'var(--radius-xl)' }} />
            </div>
          </div>
        </div>
      </section>



      {/* Programs Overview */}
      <section className="section programs-section">
        <div className="container">
          <div className="text-center">
            <h2 className="title">Our Core Programs</h2>
            <p className="subtitle">Focusing on critical pillars of primary and preventive healthcare.</p>
          </div>
          <div className="grid grid-3 programs-grid">
            <div className="program-card glass-panel">
              <div className="program-icon-wrapper">
                <Baby className="program-icon" size={32} />
              </div>
              <h3>Maternal & Child Health</h3>
              <p>Pregnancy awareness, promoting institutional delivery, and comprehensive nutrition education for newborns and infants.</p>
              <Link to="/programs" className="program-link">Read More <ArrowRight size={16}/></Link>
            </div>
            <div className="program-card glass-panel">
              <div className="program-icon-wrapper">
                <Stethoscope className="program-icon" size={32} />
              </div>
              <h3>Preventive Healthcare</h3>
              <p>Early screening and detection camps for non-communicable diseases (NCDs) like Diabetes, Hypertension, and Cancers.</p>
              <Link to="/programs" className="program-link">Read More <ArrowRight size={16}/></Link>
            </div>
            <div className="program-card glass-panel">
              <div className="program-icon-wrapper">
                <HeartPulse className="program-icon" size={32} />
              </div>
              <h3>Community Education</h3>
              <p>Training youth "Health Champions", conducting interactive health workshops, and raising widespread public health awareness.</p>
              <Link to="/programs" className="program-link">Read More <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Initiative Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div className="grid grid-2" style={{ gap: '1rem' }}>
              <img src="/assets/images/nursing_training_1.png" alt="Nursing Program" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', height: '240px', objectFit: 'cover' }} />
              <img src="/assets/images/nursing_training_2.jpg" alt="Awareness Camp" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', height: '240px', objectFit: 'cover', marginTop: '2rem' }} />
            </div>
            <div>
              <span className="tag" style={{ background: 'var(--accent)', color: 'white' }}>Latest Initiative</span>
              <h2 className="title">Empowering Future Healthcare Professionals</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We recently conducted a successful awareness program at the <strong>Narsinghpur District Nursing Training Centre</strong>. Through creative competitions like Poster Making, Rangoli, and Street Plays (Nukkad Natak), we educated nursing students on NCDs and HPV prevention.
              </p>
              <Link to="/programs" className="btn btn-outline">View All Programs <ArrowRight size={18}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support / CTA Section */}
      <section className="section cta-section">
        <div className="cta-bg-image">
          <img src="/assets/images/medical_camp_2.jpg" alt="Youth Health Champions" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container cta-content text-center">
          <h2>Bring Light to the Communities</h2>
          <p>Your support can help us reach more families, establish more health camps, and save countless lives through early medical intervention.</p>
          <div className="cta-actions">
            <Link to="/partner" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Partner With Us</Link>
            <Link to="/donate" className="btn btn-primary">Make an Impact Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
