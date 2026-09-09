import { ArrowUp } from 'lucide-react';
import siteConfig from '../../data/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg-secondary)',
      }}
    >
      <div
        className="container"
        style={{
          padding: '48px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {/* Nav Links */}
        <nav
          aria-label="Footer navigation"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.target.style.color = 'var(--color-text-primary)'; }}
              onMouseLeave={(e) => { e.target.style.color = 'var(--color-text-secondary)'; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {siteConfig.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-tertiary)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-text-tertiary)';
              }}
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '1px',
            background: 'var(--color-border)',
          }}
        />

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-text-muted)',
            }}
          >
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
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
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
