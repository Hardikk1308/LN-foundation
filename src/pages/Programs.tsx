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
              <img src="/assets/images/medical_camp_2.jpg" alt="Maternal Health Program" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
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
              <img src="/assets/images/medical_camp_3.jpg" alt="Diabetes Screening" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Youth Champions */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="title">Community Health Education</h2>
            <p className="subtitle">Sustainable impact through localized capacity building.</p>
          </div>
          <div className="glass-panel" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(to right, rgba(46,139,87,0.1), rgba(30,144,255,0.1))' }}>
            <img src="/assets/images/nursing_training_4.png" alt="Youth Champions" style={{ width: '100%', maxWidth: '800px', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', boxShadow: 'var(--shadow-md)' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Developing "Health Champions"</h3>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '2rem' }}>
              We recruit and train enthusiastic youth from local communities to become Health Champions. They act as the first point of contact for health education, ensuring that crucial awareness regarding immunizations, sanitation, and nutrition is delivered in the native dialect and context.
            </p>
            <Link to="/get-involved" className="btn btn-primary">Become a Health Champion <ArrowRight size={20}/></Link>
          </div>
        </div>
      </section>

      {/* New: Nursing Training Awareness */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--primary)', color: 'white', borderRadius: '20px', fontWeight: 600, marginBottom: '1rem' }}>Recent Awareness Program</div>
              <h2 className="title">Awareness at Narsinghpur Nursing Training Centre</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Lumenova Foundation successfully organized an awareness program at the Narsinghpur District Nursing Training Centre for nursing students. The initiative aimed not only to educate future healthcare professionals but also to empower them as agents of change in promoting public health awareness.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                The program featured engaging competitions including <strong>Poster Making, Rangoli, Nukkad Natak (Street Play), and Speech Competition</strong>, aimed at enhancing awareness on Non-Communicable Diseases (NCDs) and HPV (Human Papillomavirus).
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <span className="tag" style={{ background: 'var(--primary-light)', padding: '0.3rem 0.8rem', borderRadius: '15px', color: 'white', fontSize: '0.9rem' }}>#HealthcareEducation</span>
                <span className="tag" style={{ background: 'var(--primary-light)', padding: '0.3rem 0.8rem', borderRadius: '15px', color: 'white', fontSize: '0.9rem' }}>#NCDAwareness</span>
                <span className="tag" style={{ background: 'var(--primary-light)', padding: '0.3rem 0.8rem', borderRadius: '15px', color: 'white', fontSize: '0.9rem' }}>#HPVPrevention</span>
              </div>
            </div>
            <div className="grid grid-2" style={{ gap: '1rem' }}>
              <img src="/assets/images/nursing_training_1.png" alt="Students with Posters" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover' }} />
              <img src="/assets/images/nursing_training_2.jpg" alt="Student Group" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover' }} />
              <img src="/assets/images/nursing_training_3.jpg" alt="Staff and Students" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover' }} />
              <img src="/assets/images/nursing_training_5.png" alt="Group with Certificates" style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
