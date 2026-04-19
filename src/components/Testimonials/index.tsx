'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { testimonials } = siteContent;

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('blockquote');
    const cardWidth = card ? card.offsetWidth + 24 : 340;
    track.scrollBy({ left: dir === 'next' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <Section id="testimonials">
      <Header>
        <SectionLabel>המלצות</SectionLabel>
        <Title>{testimonials.title}</Title>
      </Header>

      <CarouselWrap>
        <ArrowButton onClick={() => scroll('prev')} aria-label="הקודם">&#8250;</ArrowButton>

        <Track ref={trackRef}>
          {testimonials.items.map((item, i) => (
            <Card key={i}>
              <QuoteMark aria-hidden="true">"</QuoteMark>
              <Quote>{item.quote}</Quote>
              <Author>— {item.name}</Author>
            </Card>
          ))}
        </Track>

        <ArrowButton onClick={() => scroll('next')} aria-label="הבא">&#8249;</ArrowButton>
      </CarouselWrap>
    </Section>
  );
}

const Section = styled.section`
  background: ${theme.colors.bg};
  padding: ${theme.spacing['2xl']} 0;
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1.5rem;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${theme.colors.primary};
`;

const CarouselWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  max-width: 1300px;
  margin: 0 auto;
`;

const Track = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 1rem 0.5rem 1.5rem;
  flex: 1;

  /* hide scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.blockquote`
  flex: 0 0 300px;
  scroll-snap-align: start;
  background: ${theme.colors.bgAlt};
  border-radius: ${theme.radii.lg};
  padding: 2rem;
  margin: 0;
  box-shadow: ${theme.shadows.sm};
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.md};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    flex: 0 0 360px;
  }
`;

const QuoteMark = styled.span`
  display: block;
  font-size: 4rem;
  line-height: 1;
  color: ${theme.colors.secondary};
  font-family: Georgia, serif;
  margin-bottom: 0.25rem;
`;

const Quote = styled.p`
  font-size: ${theme.fontSizes.base};
  line-height: 1.8;
  color: ${theme.colors.text};
  margin-bottom: 1.25rem;
  flex: 1;
`;

const Author = styled.footer`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.primary};
`;

const ArrowButton = styled.button`
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 2px solid ${theme.colors.secondary};
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  }
`;
