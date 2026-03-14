import { Link } from 'react-router-dom';
import { HandHeart, Users, Briefcase } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="page-header" style={{
        background: 'var(--accent)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Get Involved</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Join our movement to weave an unbreakable safety net of health awareness and preventive care in India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '3rem' }}>
            <div className="glass-panel text-center" style={{ padding: '3.5rem 2.5rem' }}>
              <div style={{ margin: '0 auto 2rem', width: '80px', height: '80px', background: 'var(--primary-light)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HandHeart size={40} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Volunteer With Us</h3>
              <p style={{ marginBottom: '2rem', fontSize: '1.05rem', color: 'var(--text-body)' }}>
                Offer your time and skills for event management, camp setups, content creation, or logistical support across various regions.
              </p>
              <button className="btn btn-outline" style={{ width: '100%' }}>Apply as Volunteer</button>
            </div>

            <div className="glass-panel text-center" style={{ padding: '3.5rem 2.5rem', background: 'var(--surface-alt)', transform: 'scale(1.05)', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)' }}>
              <div style={{ margin: '0 auto 2rem', width: '80px', height: '80px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={40} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Become a Health Champion</h3>
              <p style={{ marginBottom: '2rem', fontSize: '1.05rem', color: 'var(--text-body)' }}>
                Dedicated youth from local communities who receive specialized training to directly educate their neighbors regarding fundamental healthcare.
              </p>
              <button className="btn btn-primary" style={{ width: '100%' }}>Join the Champions</button>
            </div>

            <div className="glass-panel text-center" style={{ padding: '3.5rem 2.5rem' }}>
              <div style={{ margin: '0 auto 2rem', width: '80px', height: '80px', background: 'var(--secondary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={40} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Corporate CSR Partner</h3>
              <p style={{ marginBottom: '2rem', fontSize: '1.05rem', color: 'var(--text-body)' }}>
                Fulfill your corporate social responsibility goals by funding targeted health camps, medical equipment, or large-scale awareness drives.
              </p>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>Partner with Lumenova</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <img src="/assets/images/youth_champions_1773512283086.png" alt="Youth Champions" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div>
              <h2 className="title">Why Volunteer With Us?</h2>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                <li style={{ padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', marginBottom: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                  <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>Direct Community Impact</h4>
                  <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>Witness firsthand the lives you touch during our widespread health camps.</p>
                </li>
                <li style={{ padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', marginBottom: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                  <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>Professional Development</h4>
                  <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>Gain certification, leadership training, and public health experience.</p>
                </li>
                <li style={{ padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', marginBottom: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                  <h4 style={{ color: 'var(--text-dark)', fontSize: '1.1rem' }}>Networking</h4>
                  <p style={{ color: 'var(--text-body)', marginTop: '0.25rem' }}>Connect with likeminded individuals and seasoned public health professionals.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
