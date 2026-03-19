import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Stethoscope, Baby, ShieldCheck } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src="/assets/images/hero_mothers_kids_health_1773512201492.png" alt="Mothers and Kids Health Camp" />
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
              <img src="/assets/images/health_camp_community_1773512223177.png" alt="Health Awareness Camp" className="mission-image" />
              {/* <div className="experience-badge glass-panel"> */}
                {/* <span className="number">10+</span>
                <span className="text">Years of<br/>Impact</span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters (Stats) */}
      <section className="section stats-section section-bg">
        <div className="container">
          <div className="stats-grid grid grid-4 text-center">
            <div className="stat-card glass-panel">
              <h3>250+</h3>
              <p>Villages Reached</p>
            </div>
            <div className="stat-card glass-panel">
              <h3>15,000+</h3>
              <p>Mothers Supported</p>
            </div>
            <div className="stat-card glass-panel">
              <h3>800+</h3>
              <p>Health Camps</p>
            </div>
            <div className="stat-card glass-panel">
              <h3>1,200+</h3>
              <p>Volunteers Trained</p>
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

      {/* Support / CTA Section */}
      <section className="section cta-section">
        <div className="cta-bg-image">
          <img src="/assets/images/youth_champions_1773512283086.png" alt="Youth Health Champions" />
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
