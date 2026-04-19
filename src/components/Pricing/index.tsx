import styled from 'styled-components';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { pricing, contact } = siteContent;
const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

export default function Pricing() {
  return (
    <Section id="pricing">
      <Inner>
        <Header>
          <SectionLabel>מחירים</SectionLabel>
          <Title>{pricing.title}</Title>
          <Subtitle>{pricing.subtitle}</Subtitle>
        </Header>

        <Grid>
          {pricing.items.map((item, i) => (
            <Card key={i} $highlight={!!item.note}>
              {item.note && <Badge>{item.note}</Badge>}
              <ItemLabel>{item.label}</ItemLabel>
              <ItemDuration>{item.duration}</ItemDuration>
              <Price>{item.price}</Price>
            </Card>
          ))}
        </Grid>

        <Note>{pricing.note}</Note>

        <CtaWrap>
          <CtaButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            קביעת תור בוואטסאפ
          </CtaButton>
        </CtaWrap>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${theme.colors.bg};
  padding: ${theme.spacing['2xl']} 0;
`;

const Inner = styled.div`
  max-width: 900px;
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
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textMuted};
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div<{ $highlight: boolean }>`
  position: relative;
  border-radius: ${theme.radii.lg};
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: 2px solid
    ${({ $highlight }) => ($highlight ? theme.colors.accent : theme.colors.bgAlt)};
  background: ${({ $highlight }) =>
    $highlight ? theme.colors.bgAlt : theme.colors.white};
  box-shadow: ${theme.shadows.sm};
`;

const Badge = styled.span`
  position: absolute;
  top: -0.6rem;
  right: 1.25rem;
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.sm};
  font-weight: 700;
  padding: 0.2rem 0.75rem;
  border-radius: ${theme.radii.full};
`;

const ItemLabel = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const ItemDuration = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textMuted};
`;

const Price = styled.p`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: 800;
  color: ${theme.colors.text};
  margin-top: 0.5rem;
`;

const Note = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textMuted};
  margin-top: 1.5rem;
`;

const CtaWrap = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const CtaButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: ${theme.radii.full};
  font-size: ${theme.fontSizes.lg};
  font-weight: 700;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;
