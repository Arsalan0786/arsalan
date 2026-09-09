import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import siteConfig from '../../data/siteConfig';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isAtTop } = useScrollPosition();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Close mobile menu on resize
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  // Track active section
  useEffect(() => {
    const sections = siteConfig.navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          transition: 'background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s',
          backgroundColor: isAtTop
            ? 'transparent'
            : theme === 'dark'
              ? 'rgba(8, 8, 8, 0.8)'
              : 'rgba(250, 250, 250, 0.85)',
          backdropFilter: isAtTop ? 'none' : 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: isAtTop ? 'none' : 'blur(20px) saturate(180%)',
          borderBottom: isAtTop
            ? '1px solid transparent'
            : '1px solid var(--color-border)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            style={{
              fontSize: '22px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
            aria-label="Go to top"
          >
            <span style={{ color: 'var(--color-text-primary)' }}>Portfolio</span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--gradient-accent)',
                display: 'inline-block',
                marginBottom: '-2px',
              }}
            />
          </a>

          {/* Desktop Nav */}
          <div
            style={{
              display: isMobile ? 'none' : 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isActive
                      ? 'var(--color-text-primary)'
                      : 'var(--color-text-secondary)',
                    borderRadius: 'var(--radius-full)',
                    background: isActive ? 'var(--color-accent-glow)' : 'transparent',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.color = 'var(--color-text-primary)';
                      e.target.style.background = 'var(--color-surface-glass)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.color = 'var(--color-text-secondary)';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                background: 'transparent',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                marginLeft: '8px',
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
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              style={{
                padding: '10px 22px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
                background: 'var(--gradient-accent)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                marginLeft: '4px',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--gradient-accent-hover)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--gradient-accent)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Controls */}
          <div
            style={{
              display: isMobile ? 'flex' : 'none',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                background: 'transparent',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)',
                background: 'transparent',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: theme === 'dark'
                ? 'rgba(8, 8, 8, 0.95)'
                : 'rgba(250, 250, 250, 0.97)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              paddingTop: 'var(--nav-height)',
            }}
          >
            {siteConfig.navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  style={{
                    fontSize: '28px',
                    fontWeight: isActive ? 700 : 500,
                    padding: '12px 24px',
                    color: isActive
                      ? 'var(--color-accent-light)'
                      : 'var(--color-text-secondary)',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </motion.a>
              );
            })}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: siteConfig.navLinks.length * 0.05 }}
              style={{
                marginTop: '16px',
                padding: '14px 36px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                background: 'var(--gradient-accent)',
                borderRadius: 'var(--radius-full)',
              }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
