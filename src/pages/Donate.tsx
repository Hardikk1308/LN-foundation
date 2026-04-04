import { Heart, Activity, ShieldCheck, Stethoscope } from 'lucide-react';

const Donate = () => {

  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px', background: 'var(--surface-alt)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>Support The Cause</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-body)' }}>Your generous contribution directly funds on-ground medical setups, awareness kits, and essential training in rural communities.</p>
        </div>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>

          {/* Bank Transfer Details */}
          <div className="glass-panel" style={{ padding: '3rem', background: 'white', borderTop: '4px solid var(--primary)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Direct Bank Transfer</h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.6 }}>
              You can support our mission by making a direct transfer to our foundation's bank account.
            </p>

            <div style={{ background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginBottom: '0.25rem' }}>Account Name</span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>Lumenova Foundation</strong>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginBottom: '0.25rem' }}>Account Number</span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--text-dark)', letterSpacing: '1px' }}>45034124922</strong>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginBottom: '0.25rem' }}>Bank Name</span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>State Bank of India</strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginBottom: '0.25rem' }}>IFSC / RTGS Code</span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--text-dark)' }}>SBIN0001234</strong>
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Heart size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Thank you for your generosity</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                  After making a transfer, please email your transaction reference to <a href="mailto:lnfoundation074@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>lnfoundation074@gmail.com</a> to receive your tax exemption receipt.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Examples */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>The Impact of Your Gift</h2>

            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'center', background: 'white', transition: 'var(--transition)' }}>
              <div style={{ background: 'var(--surface-alt)', padding: '1rem', borderRadius: '50%' }}>
                <ShieldCheck size={32} color="var(--primary)" />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Provides 1 Health Awareness Kit</p>
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Equips a mother with vital sanitation and newborn care guidelines.</span>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'center', background: 'white', transition: 'var(--transition)' }}>
              <div style={{ background: 'var(--surface-alt)', padding: '1rem', borderRadius: '50%' }}>
                <Activity size={32} color="var(--secondary)" />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Funds a Community Health Session</p>
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Covers materials and youth champion stipends for an interactive workshop.</span>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'center', background: 'white', transition: 'var(--transition)' }}>
              <div style={{ background: 'var(--surface-alt)', padding: '1rem', borderRadius: '50%' }}>
                <Stethoscope size={32} color="var(--primary-dark)" />
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Supports a Local Health Camp</p>
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>Brings doctors, screening machines, and testing kits to a remote village.</span>
              </div>
            </div>

            <img src="/assets/images/maternal_health_group.png" alt="Smiling Mother and Child" style={{ width: '100%', borderRadius: 'var(--radius-lg)', height: '200px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
