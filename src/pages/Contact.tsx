import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page animate-fade-in" style={{ paddingTop: '80px' }}>
      <section className="page-header" style={{
        background: 'var(--text-dark)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
            Reach out to us to learn more about our programs, volunteer opportunities, or potential partnerships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            
            {/* Contact Info & Map */}
            <div>
              <h2 className="title" style={{ marginBottom: '2rem' }}>Get in Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Head Office</h3>
                    <p style={{ color: 'var(--text-body)', fontSize: '1.1rem' }}>New Bali Bazaar<br />Chhindwara, Madhya Pradesh, <br />India 480001</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Phone Number</h3>
                    <p style={{ color: 'var(--text-body)', fontSize: '1.1rem' }}>+91 898900468</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--accent)', padding: '1rem', borderRadius: '50%', color: 'white' }}>
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Email Address</h3>
                    <p style={{ color: 'var(--text-body)', fontSize: '1.1rem' }}>lnfoundation074@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div style={{ height: '300px', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--surface-alt)' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754720611!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel" style={{ padding: '3.5rem', background: 'white' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Send Us a Message</h3>
              <p style={{ color: 'var(--text-body)', marginBottom: '2.5rem' }}>Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>First Name</label>
                    <input type="text" placeholder="John" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Subject of Inquiry</label>
                  <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '1rem', background: 'white' }}>
                    <option>General Inquiry</option>
                    <option>Volunteer Application</option>
                    <option>Donation & Sponsorships</option>
                    <option>Corporate CSR Partnership</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Your Message</label>
                  <textarea rows={5} placeholder="How can we help you?" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '1rem', resize: 'vertical' }}></textarea>
                </div>

                <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', justifyContent: 'center' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
