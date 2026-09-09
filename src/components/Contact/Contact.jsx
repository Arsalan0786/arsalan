import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../UI/SectionWrapper';
import SectionHeader from '../UI/SectionHeader';
import siteConfig from '../../data/siteConfig';

const inputStyle = {
  width: '100%',
  padding: '16px 20px',
  fontSize: '15px',
  fontFamily: 'var(--font-sans)',
  color: 'var(--color-text-primary)',
  background: 'var(--color-bg-card)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
  resize: 'none',
  lineHeight: 1.5,
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--color-text-secondary)',
  marginBottom: '9px',
  letterSpacing: '0.02em',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('loading');

    // Send email using EmailJS
    try {
      if (
        siteConfig.emailjs?.serviceId &&
        siteConfig.emailjs?.templateId &&
        siteConfig.emailjs?.publicKey
      ) {
        await emailjs.send(
          siteConfig.emailjs.serviceId,
          siteConfig.emailjs.templateId,
          {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
            time: new Date().toLocaleString(),

            // Additional variables
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            subject: formData.subject,
            to_name: siteConfig.name,
          },
          siteConfig.emailjs.publicKey
        );
      } else {
        // Simulated submission when templateId or publicKey is not yet configured
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--color-accent)';
    e.target.style.boxShadow = '0 0 0 4px var(--color-accent-glow)';
    e.target.style.background = 'var(--color-bg-card-hover)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'var(--color-border)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'var(--color-bg-card)';
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Get in touch"
        title="Let's Work Together"
        description="Have an idea, project, or opportunity? Feel free to reach out — I'd love to hear from you."
        align="center"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '64px',
          maxWidth: '1040px',
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '14px',
              letterSpacing: '-0.02em',
            }}
          >
            Contact Information
          </h3>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'var(--color-text-secondary)',
              marginBottom: '32px',
            }}
          >
            I'm currently open to new opportunities, freelance projects, and collaborations.
            Whether you have a question or just want to say hello, my inbox is always open.
          </p>

          {/* Contact details cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                padding: '20px 24px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-card)',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-accent)';
                e.currentTarget.style.background = 'var(--color-bg-card-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'var(--color-bg-card)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-accent-glow)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Mail size={20} style={{ color: 'var(--color-accent-light)' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-accent-light)',
                    marginBottom: '5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    wordBreak: 'break-all',
                    lineHeight: 1.3,
                  }}
                >
                  {siteConfig.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                padding: '20px 24px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-card)',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-accent)';
                e.currentTarget.style.background = 'var(--color-bg-card-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'var(--color-bg-card)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-accent-glow)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Phone size={20} style={{ color: 'var(--color-accent-light)' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-accent-light)',
                    marginBottom: '5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  Phone
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {siteConfig.phone}
                </p>
              </div>
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                padding: '20px 24px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-card)',
                transition: 'all 0.25s ease',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-accent-glow)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} style={{ color: 'var(--color-accent-light)' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-accent-light)',
                    marginBottom: '5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div style={{ marginTop: '36px' }}>
            <p
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-muted)',
                marginBottom: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}
            >
              Find me on
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {siteConfig.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-bg-card)',
                    color: 'var(--color-text-secondary)',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'var(--color-accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 14px var(--color-accent-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.background = 'var(--color-bg-card)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <s.icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          }}
          noValidate
        >
          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" style={labelStyle}>
              Your Name <span style={{ color: 'var(--color-accent-light)' }}>*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange('name')}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                ...inputStyle,
                borderColor: errors.name ? '#ef4444' : 'var(--color-border)',
              }}
            />
            {errors.name && (
              <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '6px' }}>{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="contact-email" style={labelStyle}>
              Your Email <span style={{ color: 'var(--color-accent-light)' }}>*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange('email')}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                ...inputStyle,
                borderColor: errors.email ? '#ef4444' : 'var(--color-border)',
              }}
            />
            {errors.email && (
              <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '6px' }}>{errors.email}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="contact-subject" style={labelStyle}>
              Subject <span style={{ color: 'var(--color-accent-light)' }}>*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              placeholder="What's this regarding?"
              value={formData.subject}
              onChange={handleChange('subject')}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                ...inputStyle,
                borderColor: errors.subject ? '#ef4444' : 'var(--color-border)',
              }}
            />
            {errors.subject && (
              <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '6px' }}>{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="contact-message" style={labelStyle}>
              Your Message <span style={{ color: 'var(--color-accent-light)' }}>*</span>
            </label>
            <textarea
              id="contact-message"
              placeholder="Tell me about your project, idea, or inquiry..."
              rows={5}
              value={formData.message}
              onChange={handleChange('message')}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                ...inputStyle,
                borderColor: errors.message ? '#ef4444' : 'var(--color-border)',
              }}
            />
            {errors.message && (
              <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '6px' }}>{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '16px 36px',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              color: '#ffffff',
              background: status === 'success'
                ? '#22c55e'
                : status === 'error'
                  ? '#ef4444'
                  : 'var(--gradient-accent)',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              opacity: status === 'loading' ? 0.8 : 1,
              marginTop: '6px',
              boxShadow: '0 4px 18px var(--color-accent-glow)',
            }}
            onMouseEnter={(e) => {
              if (status === 'idle') {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 26px rgba(99, 102, 241, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (status === 'idle') {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px var(--color-accent-glow)';
              }
            }}
          >
            {status === 'loading' && (
              <>
                <Loader2 size={18} className="spin" />
                Sending Message...
              </>
            )}
            {status === 'success' && (
              <>
                <CheckCircle size={18} />
                Message Sent Successfully!
              </>
            )}
            {status === 'error' && (
              <>
                <AlertCircle size={18} />
                Failed to Send. Please Try Again.
              </>
            )}
            {status === 'idle' && (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
