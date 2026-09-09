import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../UI/SectionWrapper';
import SectionHeader from '../UI/SectionHeader';
import education from '../../data/education';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        label="Academic Background"
        title="Education"
        description="Formal academic qualifications, institutional coursework, and honors."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '24px',
          maxWidth: '1020px',
          margin: '0 auto',
        }}
      >
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            style={{
              padding: '32px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.25s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-accent)';
              e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
              e.currentTarget.style.background = 'var(--color-bg-card-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'var(--color-bg-card)';
            }}
          >
            {/* Top decorative gradient bar */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--gradient-accent)',
              }}
            />

            <div>
              {/* Header with icon and status */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(99, 102, 241, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--color-accent-light)',
                  }}
                >
                  <GraduationCap size={24} />
                </div>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--color-accent-light)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                  }}
                >
                  <Award size={13} />
                  {edu.status}
                </span>
              </div>

              {/* Degree & Field */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: '4px',
                  lineHeight: 1.3,
                }}
              >
                {edu.degree}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: 'var(--color-accent-light)',
                  marginBottom: '12px',
                }}
              >
                {edu.field}
              </p>

              {/* Institution and Period */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  marginBottom: '18px',
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <span>{edu.institution}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--color-text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-tertiary)',
                  marginBottom: '20px',
                }}
              >
                {edu.description}
              </p>

              {/* Highlights */}
              {edu.highlights && (
                <div style={{ marginBottom: '22px' }}>
                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '10px',
                    }}
                  >
                    Key Highlights
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {edu.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                          fontSize: '13px',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          style={{
                            color: 'var(--color-accent-light)',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Coursework / Skills tags */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '4px 10px',
                      fontSize: '12px',
                      fontWeight: 500,
                      fontFamily: 'var(--font-mono)',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-secondary)',
                      background: 'var(--color-bg-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
