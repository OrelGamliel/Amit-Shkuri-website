import styled from 'styled-components';
import Image from 'next/image';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { about } = siteContent;

export default function About() {
  return (
    <Section id="about">
      <Inner>
        <ImageSide>
          <ImageWrapper>
            <Image
              src={about.imageSrc}
              alt={about.imageAlt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ImageWrapper>
        </ImageSide>

        <TextSide>
          <SectionLabel>אודותי</SectionLabel>
          <Title>{about.title}</Title>

          {about.paragraphs.map((p, i) => (
            <Paragraph key={i}>{p}</Paragraph>
          ))}

          <Credentials>
            {about.credentials.map((c) => (
              <Credential key={c}>
                <Check aria-hidden="true">✓</Check>
                {c}
              </Credential>
            ))}
          </Credentials>
        </TextSide>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${theme.colors.bg};
  padding: ${theme.spacing['2xl']} 0;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const ImageSide = styled.div`
  order: -1;

  @media (min-width: ${theme.breakpoints.md}) {
    order: 1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: ${theme.radii.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};

  /* Fallback when no image */
  background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.accent});
`;

const TextSide = styled.div``;

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
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Paragraph = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.text};
  line-height: 1.8;
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const Credentials = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Credential = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${theme.fontSizes.base};
  font-weight: 600;
  color: ${theme.colors.text};
`;

const Check = styled.span`
  color: ${theme.colors.accent};
  font-weight: 700;
`;
