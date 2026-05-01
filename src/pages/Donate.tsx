import { Activity, ShieldCheck, Stethoscope } from 'lucide-react';

const Donate = () => {

  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px', background: 'var(--surface-alt)' }}>
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>Support The Cause</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-body)' }}>Your generous contribution directly funds on-ground medical setups, awareness kits, and essential training in rural communities.</p>
        </div>

        <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>

          {/* Scan & Pay Details */}
          <div className="glass-panel" style={{ padding: '3rem', background: 'white', borderTop: '4px solid var(--primary)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Scan & Pay</h2>
            <p style={{ color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.6 }}>
              You can support our mission by scanning the QR code below using any UPI app.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--surface-alt)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ marginBottom: '1.5rem', background: 'white', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=lumenova8989@sbi%26pn=Lumenova%20Foundation" 
                  alt="Scan and Pay QR Code" 
                  style={{ width: '100%', maxWidth: '200px', display: 'block', margin: '0 auto' }} 
                />
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginBottom: '0.25rem' }}>UPI ID</span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--text-dark)', letterSpacing: '1px' }}>lumenova8989@sbi</strong>
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

            <img src="/assets/images/nursing_training_2.jpg" alt="Foundation Media Feature" style={{ width: '100%', borderRadius: 'var(--radius-lg)', height: '100%', maxHeight: '400px', objectFit: 'contain', background: '#f8fafc', padding: '1rem', border: '1px solid #e2e8f0' }} />
          </div>
        </div>

        {/* Impactful Messages */}
        <div style={{ marginTop: '5rem' }}>
          <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'Outfit, sans-serif', color: 'var(--text-dark)' }}>Words of Impact</h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {/* Message 1 */}
            <div className="glass-panel hover-card" style={{ padding: '2.5rem', borderLeft: '5px solid var(--primary)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                "Your small contribution can become someone’s hope, someone’s health, and someone’s future. Support Lumenova Foundation and be the reason a life changes today."
              </p>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-body)', lineHeight: '1.6' }}>
                "आपका छोटा सा योगदान किसी की उम्मीद, किसी की सेहत और किसी का भविष्य बन सकता है। Lumenova Foundation के साथ जुड़कर आज किसी का जीवन बदलें।"
              </p>
            </div>

            {/* Message 2 */}
            <div className="glass-panel hover-card" style={{ padding: '2.5rem', borderLeft: '5px solid var(--secondary)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                "Don’t just donate—create impact. With Lumenova Foundation, your support transforms lives through health, education, and empowerment."
              </p>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-body)', lineHeight: '1.6' }}>
                "सिर्फ दान न करें, बदलाव का हिस्सा बनें। Lumenova Foundation के साथ आपका सहयोग स्वास्थ्य, शिक्षा और सशक्तिकरण के माध्यम से जीवन बदलता है।"
              </p>
            </div>

            {/* Message 3 */}
            <div className="glass-panel hover-card" style={{ padding: '2.5rem', borderLeft: '5px solid var(--primary-dark)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                "A single act of kindness can light thousands of lives. Donate to Lumenova Foundation and help us reach those who need it the most."
              </p>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-body)', lineHeight: '1.6' }}>
                "आपकी एक मदद हजारों जिंदगियों में रोशनी ला सकती है। Lumenova Foundation को दान देकर ज़रूरतमंदों तक पहुंचने में हमारी मदद करें।"
              </p>
            </div>

            {/* Message 4 */}
            <div className="glass-panel hover-card" style={{ padding: '2.5rem', borderLeft: '5px solid var(--primary)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                "Together, we can build a future where no one is left behind. Your donation to Lumenova Foundation fuels real change in real communities."
              </p>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-body)', lineHeight: '1.6' }}>
                "आइए मिलकर एक ऐसा समाज बनाएं जहाँ कोई पीछे न रह जाए। आपका दान Lumenova Foundation के साथ वास्तविक बदलाव लाता है।"
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
