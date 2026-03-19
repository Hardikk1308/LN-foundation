import { useState } from 'react';
import { Heart, Activity, ShieldCheck, Stethoscope } from 'lucide-react';

const Donate = () => {
  const [frequency, setFrequency] = useState('Monthly');
  const [amount, setAmount] = useState<number | ''>('');

  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px', background: 'var(--surface-alt)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>Support The Cause</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-body)' }}>Your generous contribution directly funds on-ground medical setups, awareness kits, and essential training in rural communities.</p>
        </div>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          
          {/* Donation Form */}
          <div className="glass-panel" style={{ padding: '3rem', background: 'white', borderTop: '4px solid var(--primary)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Make a Secure Donation</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '1rem' }}>Select Frequency</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <button 
                  onClick={() => setFrequency('Monthly')}
                  className={`btn ${frequency === 'Monthly' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                >Monthly</button>
                <button 
                  onClick={() => setFrequency('Quarterly')}
                  className={`btn ${frequency === 'Quarterly' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                >Quarterly</button>
                <button 
                  onClick={() => setFrequency('Yearly')}
                  className={`btn ${frequency === 'Yearly' ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                >Yearly</button>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Amount (INR)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 600, color: 'var(--text-body)' }}>₹</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')}
                  style={{ width: '100%', padding: '1rem 1rem 1rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '1.1rem' }} 
                />
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>First Name</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Last Name</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address</label>
                <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1' }} />
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem' }}>
              Donate {amount ? `₹${amount}` : ''} {frequency} <Heart size={20} />
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748b', marginTop: '1rem' }}>Secure encrypted transaction. Section 80G tax exemption receipt provided.</p>
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
