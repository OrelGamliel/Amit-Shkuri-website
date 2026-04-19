import styled from 'styled-components';
import Image from 'next/image';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { gallery } = siteContent;

export default function Gallery() {
  return (
    <Section id="gallery">
      <Inner>
        <Header>
          <SectionLabel>גלריה</SectionLabel>
          <Title>{gallery.title}</Title>
        </Header>

        <Grid>
          {gallery.images.map((img, i) => (
            <Item key={i} $featured={i === 0}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* <ItemOverlay>
                <ItemLabel>{img.alt}</ItemLabel>
              </ItemOverlay> */}
            </Item>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${theme.colors.bgAlt};
  padding: ${theme.spacing['2xl']} 0;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Item = styled.div<{ $featured: boolean }>`
  position: relative;
  border-radius: ${theme.radii.md};
  overflow: hidden;
  aspect-ratio: 4/5;
  cursor: pointer;

  /* Fallback background */
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary}99,
    ${theme.colors.accent}99
  );


  &:hover > div {
    opacity: 1;
  }
`;

const ItemOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
`;

const ItemLabel = styled.span`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
`;
