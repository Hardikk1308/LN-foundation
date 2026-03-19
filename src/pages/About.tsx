import { Target, Lightbulb, Users, Heart, Layers } from 'lucide-react';

const About = () => {
  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="page-header" style={{
        background: 'var(--primary-dark)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>About Lumenova Foundation</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Dedicated to illuminating lives through accessible health education and preventive care.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 className="title">Our Background</h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Lumenova Foundation was established with a singular focus: to bridge the gap between rural communities and essential healthcare services. We understood that many lives could be saved simply through timely awareness, proper preventive measures, and early screening.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                Working tirelessly across India, we have built a robust network of community health workers, local government partnerships, and dedicated volunteers. Our "Small Action, Bright Impact" philosophy ensures that every intervention, no matter how small, creates a ripple effect of health and well-being for generations to come.
              </p>
            </div>
            <div>
              <img 
                src="/assets/images/health_camp_hero.png" 
                alt="Our Foundation Impact" 
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="title">Vision & Mission</h2>
          </div>
          <div className="grid grid-2">
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <div style={{ background: 'var(--primary)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.5rem' }}>
                <Target size={32} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.1rem' }}>
                To build a healthier and safer community where every mother, child, and family has access to quality health awareness, preventive care, and early screening services.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <div style={{ background: 'var(--secondary)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.5rem' }}>
                <Lightbulb size={32} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Mission</h3>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>Empower pregnant women with knowledge for safe delivery</li>
                <li>Improve newborn and child health via caregiver education</li>
                <li>Promote early detection of non-communicable diseases</li>
                <li>Develop youth volunteers as "Health Champions"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="title">Our Values</h2>
            <p className="subtitle">The core principles that guide our work and impact.</p>
          </div>
          <div className="grid grid-3">
            <div className="glass-panel text-center" style={{ padding: '2.5rem 2rem' }}>
              <Heart size={40} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3>Compassion</h3>
              <p>We serve with empathy and respect for every individual we encounter.</p>
            </div>
            <div className="glass-panel text-center" style={{ padding: '2.5rem 2rem' }}>
              <Users size={40} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3>Community First</h3>
              <p>Our initiatives are designed by listening to the direct needs of local communities.</p>
            </div>
            <div className="glass-panel text-center" style={{ padding: '2.5rem 2rem' }}>
              <Layers size={40} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3>Integrity</h3>
              <p>We maintain full transparency with our partners, donors, and beneficiaries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
