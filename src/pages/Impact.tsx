

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
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="title" style={{ marginBottom: '1.5rem' }}>A Commitment to Real Action</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                At Lumenova Foundation, we believe that impact is measured not just in figures, but in the trust we build within communities. We are currently rolling out our pilot programs across Madhya Pradesh, focusing on three core areas that we believe will create the most significant long-term change.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Grassroots Outreach</h4>
                  <p>Establishing a local network of "Health Champions" in every village to ensure information is culturally relevant and timely.</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white' }}>
                  <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Direct Intervention</h4>
                  <p>Organizing mobile health camps equipped with essential diagnostic tools for early NCD detection and maternal care.</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'white' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Sustainability</h4>
                  <p>Partnering with local government bodies to ensure that our health initiatives integrate with and support existing public systems.</p>
                </div>
              </div>
            </div>
            <div>
               <img src="/assets/images/health_camp_hero.png" alt="Community Health Real Impact" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
