import styled from 'styled-components';
import Image from 'next/image';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { hero, contact } = siteContent;
const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

export default function Hero() {
  return (
    <Section id="hero">
      <BgOverlay />
      <BgImage>
        {/* <Image
          src="/images/hero.jpg"
          alt="טיפול שיאצו"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        /> */}
      </BgImage>

      <Content>
        <Headline>{hero.headline}</Headline>
        <Subheadline>{hero.subheadline}</Subheadline>
        <Description>{hero.description}</Description>
        <CtaButton
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {hero.cta}
        </CtaButton>
      </Content>

      <ScrollHint>
        <span>{hero.scrollLabel}</span>
        <Arrow aria-hidden="true">↓</Arrow>
      </ScrollHint>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BgImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  /* Fallback background when no image is provided */
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
`;

const BgOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.25) 60%,
    rgba(0, 0, 0, 0.55) 100%
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: ${theme.colors.white};
  padding: 2rem 1.5rem;
  max-width: 720px;
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const Subheadline = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 1.25rem;
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  line-height: 1.7;
  opacity: 0.85;
  max-width: 540px;
  margin: 0 auto 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const CtaButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.full};
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: ${theme.colors.white};
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: ${theme.fontSizes.sm};
`;

const Arrow = styled.span`
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }
`;
