import styled from 'styled-components';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { services, contact } = siteContent;
const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

export default function Services() {
  return (
    <Section id="services">
      <Inner>
        <Header>
          <SectionLabel>טיפולים</SectionLabel>
          <Title>{services.title}</Title>
          <Subtitle>{services.subtitle}</Subtitle>
        </Header>

        <Grid>
          {services.items.map((service) => (
            <Card key={service.id}>
              <IconWrap aria-hidden="true">{service.icon}</IconWrap>
              <CardName>{service.name}</CardName>
              <CardDescription>{service.description}</CardDescription>
              <BookButton
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                קביעת תור
              </BookButton>
            </Card>
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
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textMuted};
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  max-width: 860px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.article`
  background: ${theme.colors.white};
  border-radius: ${theme.radii.lg};
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: ${theme.shadows.sm};
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.md};
  }
`;

const IconWrap = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  color: ${theme.colors.primary};
`;

const CardName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: ${theme.colors.primary};
`;



const CardDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.text};
  line-height: 1.7;
  flex: 1;
`;

const BookButton = styled.a`
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.6rem 1.25rem;
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.radii.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.primary};
  text-align: center;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
