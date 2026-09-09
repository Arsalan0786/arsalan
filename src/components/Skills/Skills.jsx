import { motion } from 'framer-motion';
import SectionWrapper from '../UI/SectionWrapper';
import SectionHeader from '../UI/SectionHeader';
import skills from '../../data/skills';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="What I work with"
        title="Skills & Technologies"
        description="Technologies and tools I use to bring ideas to life."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {skills.map((category, catIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
                marginBottom: '16px',
                paddingBottom: '8px',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {category.category}
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              {category.items.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: catIdx * 0.1 + skillIdx * 0.03,
                  }}
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.2 },
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-bg-card)',
                    cursor: 'default',
                    transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-accent)';
                    e.currentTarget.style.background = 'var(--color-bg-card-hover)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = 'var(--color-bg-card)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <skill.icon
                    size={16}
                    style={{
                      color: 'var(--color-accent-light)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
