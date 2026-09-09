import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import SectionWrapper from '../UI/SectionWrapper';
import SectionHeader from '../UI/SectionHeader';
import projects from '../../data/projects';

/* ─── Project Card ─── */
function ProjectCard({ project, index, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(project); }}
      aria-label={`View details for ${project.title}`}
      style={{
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-bg-card)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.borderColor = 'var(--color-border-accent)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg), var(--shadow-glow)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          background: 'var(--color-bg-tertiary)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.15,
              background: `linear-gradient(
                135deg, 
                var(--color-bg-tertiary) 0%, 
                var(--color-bg-secondary) 50%,
                var(--color-bg-tertiary) 100%
              )`,
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--gradient-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={36} style={{ color: '#fff' }} />
            </div>
          </div>
        )}
        {/* Gradient overlay to seamlessly merge into card */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '45%',
            background: 'linear-gradient(to top, var(--color-bg-card) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: '20px 24px 24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          {project.date && (
            <span
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-accent-light)',
                fontWeight: 600,
                background: 'rgba(99, 102, 241, 0.1)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {project.date}
            </span>
          )}
          {project.status && (
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: '#f59e0b',
                fontWeight: 600,
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {project.status}
            </span>
          )}
        </div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: '10px',
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'var(--color-text-tertiary)',
            marginBottom: '16px',
            flex: 1,
          }}
        >
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '20px',
          }}
        >
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              style={{
                padding: '4px 10px',
                fontSize: '11px',
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
          {project.technologies.length > 4 && (
            <span
              style={{
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: 500,
                fontFamily: 'var(--font-mono)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--color-text-muted)',
              }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-hover)';
              e.currentTarget.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
          >
            <Github size={14} />
            Code
          </a>
          {project.liveDemo && project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 500,
                color: '#ffffff',
                background: 'var(--gradient-accent)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Project Modal ─── */
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        backgroundColor: 'var(--color-overlay)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label={`Details for ${project.title}`}
        style={{
          width: '100%',
          maxWidth: '700px',
          maxHeight: '85vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--color-border)',
          background: 'var(--color-bg-card)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Header image */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            background: 'var(--color-bg-tertiary)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          ) : (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.12,
                background: `linear-gradient(
                  135deg,
                  var(--color-bg-tertiary) 0%,
                  var(--color-bg-secondary) 50%,
                  var(--color-bg-tertiary) 100%
                )`,
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--gradient-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={44} style={{ color: '#fff' }} />
              </div>
            </div>
          )}

          {/* Bottom subtle gradient */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35%',
              background: 'linear-gradient(to top, var(--color-bg-card) 0%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(0,0,0,0.65)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.85)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.65)'; }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              marginBottom: '24px',
            }}
          >
            {project.fullDescription}
          </p>

          {/* Problem & Solution */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-secondary)',
              }}
            >
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '8px',
                }}
              >
                Problem
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {project.problem}
              </p>
            </div>
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-secondary)',
              }}
            >
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '8px',
                }}
              >
                Solution
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {project.solution}
              </p>
            </div>
          </div>

          {/* Future Scope & Expansion */}
          {project.futureScope && (
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg-secondary)',
                marginBottom: '24px',
              }}
            >
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-accent-light)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '8px',
                }}
              >
                Future Scope & Expansion
              </h4>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {project.futureScope}
              </p>
            </div>
          )}

          {/* Technologies */}
          <div style={{ marginBottom: '24px' }}>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
                marginBottom: '10px',
              }}
            >
              Technologies
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '5px 12px',
                    fontSize: '12px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-mono)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                e.currentTarget.style.background = 'var(--color-surface-glass)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Github size={16} />
              View Source
            </a>
            {project.liveDemo && project.liveDemo !== '#' && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: 'var(--gradient-accent)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                }}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Projects Section ─── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projects.filter((p) => p.featured);

  // Close on Escape
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setSelectedProject(null);
  };

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="What I've built"
        title="Featured Projects"
        description="A selection of projects that showcase my skills and interests."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
          gap: '24px',
        }}
      >
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Escape listener */}
      {selectedProject && (
        <div
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          ref={(el) => el && el.focus()}
          style={{ position: 'fixed', opacity: 0, pointerEvents: 'none' }}
        />
      )}
    </SectionWrapper>
  );
}
