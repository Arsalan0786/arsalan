import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../UI/SectionWrapper';
import SectionHeader from '../UI/SectionHeader';
import experience from '../../data/experience';

function ExperienceCard({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        display: 'flex',
        gap: '24px',
        position: 'relative',
      }}
    >
      {/* Timeline line & node */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-full)',
            border: '2px solid var(--color-border)',
            background: 'var(--color-bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-accent-light)',
            boxShadow: '0 0 12px var(--color-accent-glow)',
            zIndex: 1,
          }}
        >
          <Briefcase size={18} />
        </div>
        {!isLast && (
          <div
            style={{
              width: '2px',
              flex: 1,
              background: 'linear-gradient(to bottom, var(--color-accent) 0%, var(--color-border) 100%)',
              marginTop: '6px',
              marginBottom: '6px',
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {/* Card Content */}
      <div
        style={{
          flex: 1,
          paddingBottom: isLast ? 0 : '36px',
        }}
      >
        <div
          style={{
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            background: 'var(--color-bg-card)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border-hover)';
            e.currentTarget.style.background = 'var(--color-bg-card-hover)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
            e.currentTarget.style.background = 'var(--color-bg-card)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {/* Top metadata */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={13} style={{ color: 'var(--color-accent-light)' }} />
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-accent-light)',
                  letterSpacing: '0.02em',
                }}
              >
                {item.period}
              </span>
            </div>

            {item.employmentType && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(99, 102, 241, 0.1)',
                  color: 'var(--color-accent-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {item.employmentType}
              </span>
            )}
          </div>

          {/* Title and Organization */}
          <h3
            style={{
              fontSize: '19px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: '4px',
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              marginBottom: '8px',
            }}
          >
            {item.organization}
          </p>

          {item.location && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                marginBottom: '14px',
              }}
            >
              <MapPin size={13} />
              <span>{item.location}</span>
            </div>
          )}

          {/* Description */}
          <p
            style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'var(--color-text-tertiary)',
              marginBottom: '16px',
            }}
          >
            {item.description}
          </p>

          {/* Skills / tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {item.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: 500,
                  fontFamily: 'var(--font-mono)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  letterSpacing: '0.02em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Career & Leadership"
        title="Experience"
        description="A timeline of my professional roles, internships, and student community leadership."
      />

      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >
        {experience.map((item, i) => (
          <ExperienceCard
            key={`${item.title}-${item.organization}-${i}`}
            item={item}
            index={i}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
