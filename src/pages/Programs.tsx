import { Link } from 'react-router-dom';
import { Baby, Activity, BookOpen, Stethoscope, ArrowRight } from 'lucide-react';

const Programs = () => {
  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="page-header" style={{
        background: 'var(--secondary)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Our Programs</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Comprehensive healthcare initiatives designed to protect, educate, and empower vulnerable communities across the nation.
          </p>
        </div>
      </section>

      {/* Maternal & Child Health */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--primary-light)', color: 'white', borderRadius: '20px', fontWeight: 600, marginBottom: '1rem' }}>Maternal Health</div>
              <h2 className="title">Safe Pregnancy & Institutional Delivery</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                We empower pregnant women with the critical knowledge needed for a safe pregnancy journey. Through regular community workshops, we promote the importance of Institutional Delivery over home births to drastically reduce maternal mortality rates.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}><Baby color="var(--primary)" /> Antenatal Care (ANC) counseling</li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}><Activity color="var(--primary)" /> Nutrition supplements awareness</li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}><Stethoscope color="var(--primary)" /> Postnatal Care (PNC) support</li>
              </ul>
            </div>
            <div>
              <img src="/assets/images/maternal_health_group.png" alt="Maternal Health Program" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Healthcare */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div style={{ order: 2 }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent)', color: 'white', borderRadius: '20px', fontWeight: 600, marginBottom: '1rem' }}>Preventive Healthcare</div>
              <h2 className="title">Screening & Early Detection</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Non-communicable diseases (NCDs) silently affect millions. We conduct regular screening camps in remote villages to catch these diseases early, when they are most manageable.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}><Activity color="var(--accent)" /> Diabetes and Blood Sugar screening</li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}><Stethoscope color="var(--accent)" /> Hypertension and Blood Pressure checks</li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}><BookOpen color="var(--accent)" /> Cancer awareness and primary referrals</li>
              </ul>
            </div>
            <div style={{ order: 1 }}>
              <img src="/assets/images/medical_screening_closeup.png" alt="Diabetes Screening" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Youth Champions */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="title">Community Health Education</h2>
            <p className="subtitle">Sustainable impact through localized capacity building.</p>
          </div>
          <div className="glass-panel" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(to right, rgba(46,139,87,0.1), rgba(30,144,255,0.1))' }}>
            <img src="/assets/images/youth_volunteers_banner.png" alt="Youth Champions" style={{ width: '100%', maxWidth: '800px', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', boxShadow: 'var(--shadow-md)' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Developing "Health Champions"</h3>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '2rem' }}>
              We recruit and train enthusiastic youth from local communities to become Health Champions. They act as the first point of contact for health education, ensuring that crucial awareness regarding immunizations, sanitation, and nutrition is delivered in the native dialect and context.
            </p>
            <Link to="/get-involved" className="btn btn-primary">Become a Health Champion <ArrowRight size={20}/></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
