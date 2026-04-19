'use client';

import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { nav, contact } = siteContent;

const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Wrapper $scrolled={scrolled}>
      <Inner>
        <Logo href="/" $scrolled={scrolled}>{contact.name}</Logo>

        <Nav>
          {nav.links.map((link) => (
            <NavLink key={link.href} href={link.href} $scrolled={scrolled}>
              {link.label}
            </NavLink>
          ))}
        </Nav>

        <CtaButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          {nav.cta}
        </CtaButton>

        <Hamburger
          $scrolled={scrolled}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="תפריט"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </Hamburger>
      </Inner>

      {menuOpen && (
        <MobileMenu>
          {nav.links.map((link) => (
            <MobileNavLink
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </MobileNavLink>
          ))}
          <MobileCtaButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </MobileCtaButton>
        </MobileMenu>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: ${theme.colors.bg};
      box-shadow: ${theme.shadows.sm};
    `}
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.a<{ $scrolled: boolean }>`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ $scrolled }) => ($scrolled ? theme.colors.primary : theme.colors.white)};
  letter-spacing: -0.02em;
  margin-left: auto;
  transition: color 0.3s;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-left: 0;
  }
`;

const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;
  margin-right: auto;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLink = styled.a<{ $scrolled: boolean }>`
  font-size: ${theme.fontSizes.base};
  color: ${({ $scrolled }) => ($scrolled ? theme.colors.text : theme.colors.white)};
  transition: color 0.3s;

  &:hover {
    color: ${({ $scrolled }) => ($scrolled ? theme.colors.primary : theme.colors.secondary)};
  }
`;

const CtaButton = styled.a`
  display: none;
  padding: 0.5rem 1.25rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const Hamburger = styled.button<{ $scrolled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({ $scrolled }) => ($scrolled ? theme.colors.text : theme.colors.white)};
    border-radius: 2px;
    transition: background 0.3s;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  background: ${theme.colors.bg};
  padding: 1rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid ${theme.colors.bgAlt};

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  padding: 0.25rem 0;
`;

const MobileCtaButton = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.full};
  font-weight: 600;
  text-align: center;
`;
