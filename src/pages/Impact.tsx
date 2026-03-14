import { Users, HeartPulse, Activity, Globe } from 'lucide-react';

const Impact = () => {
  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="page-header" style={{
        background: 'var(--primary)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Our Impact</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            A data-driven look at how we are shifting community health indicators for a better tomorrow.
          </p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="title">By The Numbers</h2>
            <p className="subtitle">Every number represents a life touched, a family supported, and a community strengthened.</p>
          </div>
          
          <div className="grid grid-4 text-center">
            <div className="glass-panel" style={{ padding: '3rem 2rem', background: 'white' }}>
              <Globe size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>250+</h3>
              <p style={{ fontWeight: 600 }}>Villages Reached</p>
            </div>
            <div className="glass-panel" style={{ padding: '3rem 2rem', background: 'white' }}>
              <HeartPulse size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>15k+</h3>
              <p style={{ fontWeight: 600 }}>Mothers Supported</p>
            </div>
            <div className="glass-panel" style={{ padding: '3rem 2rem', background: 'white' }}>
              <Activity size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>800+</h3>
              <p style={{ fontWeight: 600 }}>Health Camps</p>
            </div>
            <div className="glass-panel" style={{ padding: '3rem 2rem', background: 'white' }}>
              <Users size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
              <h3 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>1,200</h3>
              <p style={{ fontWeight: 600 }}>Community Volunteers</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="title">Translating Resources To Action</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                With transparent operations and targeted outreach, our programs consistently yield high returns on community health investments.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <span>Institutional Deliveries Increased By</span>
                  <span style={{ color: 'var(--primary)' }}>65%</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: 'var(--surface-alt)', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '65%', height: '100%', background: 'var(--primary)', borderRadius: '6px' }}></div>
                </div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <span>Early NCD Detections</span>
                  <span style={{ color: 'var(--secondary)' }}>12,000+</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: 'var(--surface-alt)', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', background: 'var(--secondary)', borderRadius: '6px' }}></div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                  <span>Child Immunization Awareness Reach</span>
                  <span style={{ color: 'var(--accent)' }}>92%</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: 'var(--surface-alt)', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: 'var(--accent)', borderRadius: '6px' }}></div>
                </div>
              </div>
            </div>
            <div>
               <img src="/assets/images/health_camp_community_1773512223177.png" alt="Community Health Real Impact" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
