import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setShowToast(true);

      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C8A24A', '#E2C77A'],
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C8A24A', '#E2C77A'],
      });

      // Generate WhatsApp message
      const phoneNumber = '919483418979'; // Primary contact number
      const text = `Assalamu Alaikum,\n\nWe are expressing our interest in the matrimonial profile. Here are our details:\n\n*Name:* ${formData.name}\n*Relation to Bride:* ${formData.relation}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n*Message:* ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setFormData({ name: '', relation: '', email: '', phone: '', message: '' });
      setStatus('idle');
    }, 1200);
  };

  return (
    <section id="contact">
      <div className="overlay" style={{ background: 'transparent' }}></div>
      
      <div className="inner wrap">
        <div className="contact-grid">
          
          {/* Left Column: Express Interest Form Card */}
          <div className="contact-form-card reveal">
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '2rem', marginBottom: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MessageSquare size={24} color="var(--gold-soft)" />
              Express Interest
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ayesha Rahman"
                />
              </div>

              <div className="form-group">
                <label htmlFor="relation">Your Relation to Bride</label>
                <select
                  id="relation"
                  required
                  value={formData.relation}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Relation</option>
                  <option value="Self">Self (Bride)</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Guardian">Guardian</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ayesha@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Introduction / Message</label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please share details about your background, education, and family expectations..."
                  style={{ resize: 'none' }}
                />
              </div>

              <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Send Interest Proposal <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Messages & Phone lists */}
          <div>
            <div className="eyebrow on-dark reveal">
              <svg className="rosette-mini rosette" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100.0,12.0 L 116.07,61.2 L 162.23,37.77 L 138.8,83.93 L 188.0,100.0 L 138.8,116.07 L 162.23,162.23 L 116.07,138.8 L 100.0,188.0 L 83.93,138.8 L 37.77,162.23 L 61.2,116.07 L 12.0,100.0 L 61.2,83.93 L 37.77,37.77 L 83.93,61.2 Z" />
              </svg>
              Final Message
            </div>
            
            <blockquote className="reveal" style={{ marginTop: '1.4rem' }}>
              "Marriage is not simply finding the right person; it is two individuals choosing to grow together in faith, character, and purpose. I pray Allah grants us what is best and places barakah in this journey."
            </blockquote>

            <div className="contact-list reveal-stagger">
              <div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.3 1.78.54 2.63a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.45-1.11a2 2 0 012.11-.45c.85.24 1.73.42 2.63.54A2 2 0 0122 16.92z" />
                </svg>
                +91 97418 93011
              </div>
              <div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.3 1.78.54 2.63a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.45-1.11a2 2 0 012.11-.45c.85.24 1.73.42 2.63.54A2 2 0 0122 16.92z" />
                </svg>
                +91 99029 49850
              </div>
              <div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.3 1.78.54 2.63a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.45-1.11a2 2 0 012.11-.45c.85.24 1.73.42 2.63.54A2 2 0 0122 16.92z" />
                </svg>
                +91 94834 18979
              </div>
            </div>
            
            <div className="contact-note reveal">
              For further communication, kindly contact through family.
            </div>
          </div>

        </div>
      </div>

      {/* Floating success toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            style={{
              position: 'fixed', bottom: '2rem', right: '2rem',
              background: 'var(--ink-2)', border: '1px solid var(--gold)',
              padding: '1.25rem', borderRadius: '1rem',
              boxShadow: 'var(--shadow)', zIndex: 50, display: 'flex', alignItems: 'center', gap: '1rem',
              maxWidth: '380px'
            }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div style={{ padding: '0.5rem', background: 'rgba(200,162,74,0.1)', borderRadius: '0.75rem' }}>
              <CheckCircle2 color="var(--gold-soft)" size={24} />
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--display)', fontWeight: 'bold', fontSize: '1rem', color: 'var(--gold-soft)' }}>
                Proposal Sent!
              </h4>
              <p style={{ fontSize: '0.75rem', color: '#cfe0de', marginTop: '0.25rem', lineHeight: 1.6 }}>
                Thank you for your interest. We will review and reach out soon. JazakAllah Khair!
              </p>
              <button
                onClick={() => setShowToast(false)}
                style={{
                  fontSize: '0.625rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.05em',
                  fontWeight: 'bold', marginTop: '0.5rem', cursor: 'pointer', background: 'none', border: 'none'
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
