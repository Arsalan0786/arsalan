import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Sparkles, FileText } from 'lucide-react';
import SectionWrapper from '../UI/SectionWrapper';
import SectionHeader from '../UI/SectionHeader';
import siteConfig from '../../data/siteConfig';

const factIcons = {
  Location: MapPin,
  Education: GraduationCap,
  Focus: Briefcase,
  Interests: Sparkles,
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="Get to know me"
        title="About Me"
        description="A brief introduction about who I am and what drives me."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Left — Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingTop: '32px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '430px',
              aspectRatio: '4 / 5',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--color-bg-tertiary)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 16px 40px -12px rgba(0, 0, 0, 0.35)',
            }}
          >
            <img
              src={siteConfig.profileImage}
              alt={`Portrait of ${siteConfig.name}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
            {/* Subtle gradient overlay at bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '30%',
                background: 'linear-gradient(transparent, var(--color-bg-primary))',
                opacity: 0.4,
                pointerEvents: 'none',
              }}
            />
          </div>
        </motion.div>

        {/* Right — About Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              marginBottom: '24px',
            }}
          >
            I’m a <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Computer Science Engineer</strong> passionate about building practical, technology-driven solutions to real-world problems. I enjoy working across <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>AI/ML</strong>, software development, and emerging technologies, turning ideas into functional products that create meaningful impact.
          </p>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              marginBottom: '24px',
            }}
          >
            I’ve worked on projects spanning AI-powered dashboards, healthcare analytics, and intelligent systems, while also gaining experience through hackathons and hands-on development. I’m particularly interested in exploring how AI can be applied beyond theory to solve complex problems at scale.
          </p>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              marginBottom: '36px',
            }}
          >
            Always learning, building, and experimenting. I’m looking to collaborate with people and teams working on ambitious ideas where technology can make a real difference.
          </p>

          {/* Quick Facts */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
          >
            {siteConfig.aboutFacts.map((fact, i) => {
              const IconComp = factIcons[fact.label] || Sparkles;
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-bg-card)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                    e.currentTarget.style.background = 'var(--color-bg-card-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = 'var(--color-bg-card)';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <IconComp
                      size={14}
                      style={{ color: 'var(--color-accent-light)' }}
                    />
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {fact.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {fact.value}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Resume Download / View */}
          <div style={{ marginTop: '28px' }}>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
                background: 'var(--gradient-accent)',
                borderRadius: 'var(--radius-full)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 14px var(--color-accent-glow)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px var(--color-accent-glow)';
              }}
            >
              <FileText size={16} />
              View Resume / CV
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
