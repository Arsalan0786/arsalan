import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../UI/SectionWrapper';
import SectionHeader from '../UI/SectionHeader';
import achievements from '../../data/achievements';

const filters = ['All', 'Certifications', 'Achievements'];

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Sort chronologically: latest on top, oldest at the bottom
  const sortedItems = [...achievements].sort(
    (a, b) => (b.dateValue || 0) - (a.dateValue || 0)
  );

  const filteredItems = sortedItems.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Certifications') return item.type === 'Certification';
    if (activeFilter === 'Achievements') return item.type === 'Achievement';
    return true;
  });

  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        label="Credentials & Recognition"
        title="Certifications & Achievements"
        description="Verified licenses, technical certifications, and milestone achievements arranged in reverse chronological order."
      />

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '36px',
        }}
      >
        {filters.map((f) => {
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 20px',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: 'var(--radius-full)',
                border: isActive
                  ? '1px solid var(--color-accent)'
                  : '1px solid var(--color-border)',
                background: isActive
                  ? 'var(--color-accent)'
                  : 'var(--color-bg-card)',
                color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '16px',
        }}
      >
        <AnimatePresence>
          {filteredItems.map((item, i) => {
            const IconComp = item.icon;
            const isCert = item.type === 'Certification';
            return (
              <motion.div
                key={`${item.title}-${item.organization}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg-card)',
                  transition: 'border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                  e.currentTarget.style.background = 'var(--color-bg-card-hover)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.background = 'var(--color-bg-card)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      marginBottom: '14px',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-md)',
                        background: isCert
                          ? 'rgba(99, 102, 241, 0.12)'
                          : 'rgba(234, 179, 8, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComp
                        size={20}
                        style={{
                          color: isCert ? 'var(--color-accent-light)' : '#eab308',
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '8px',
                          marginBottom: '4px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            background: isCert
                              ? 'rgba(99, 102, 241, 0.1)'
                              : 'rgba(234, 179, 8, 0.15)',
                            color: isCert ? 'var(--color-accent-light)' : '#facc15',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {item.type}
                        </span>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: 600,
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--color-accent-light)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.year}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: 'var(--color-text-primary)',
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'var(--color-text-secondary)',
                          marginTop: '2px',
                        }}
                      >
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.6,
                      color: 'var(--color-text-tertiary)',
                      marginBottom: '12px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div>
                  {item.credentialId && (
                    <div style={{ marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-bg-secondary)',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border)',
                          display: 'inline-block',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        ID: {item.credentialId}
                      </span>
                    </div>
                  )}

                  {item.skills && item.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontSize: '11px',
                            fontFamily: 'var(--font-mono)',
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(99, 102, 241, 0.08)',
                            color: 'var(--color-accent-light)',
                            border: '1px solid rgba(99, 102, 241, 0.15)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
