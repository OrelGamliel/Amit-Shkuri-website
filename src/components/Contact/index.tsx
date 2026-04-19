import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { contact: contactInfo, contactSection } = siteContent;
const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}`;

export default function Contact() {
  return (
    <Section id="contact">
      <Inner>
        <Header>
          <SectionLabel>יצירת קשר</SectionLabel>
          <Title>{contactSection.title}</Title>
          <Subtitle>{contactSection.subtitle}</Subtitle>
          <Description>{contactSection.description}</Description>
        </Header>

        <IconGroup>
          <IconLink
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="וואטסאפ"
            $color="#25D366"
          >
            <FaWhatsapp size={26} />
          </IconLink>

          <IconLink href={`tel:${contactInfo.phone}`} aria-label="התקשרי" $color="rgba(255,255,255,0.9)">
            <FaPhone size={22} />
          </IconLink>

          {contactInfo.instagram && (
            <IconLink href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם" $instagram>
              <FaInstagram size={24} />
            </IconLink>
          )}
        </IconGroup>

        <LocationWrap>
          <LocationIcon aria-hidden="true">📍</LocationIcon>
          <LocationText>{contactInfo.location}</LocationText>
        </LocationWrap>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  background: ${theme.colors.primary};
  padding: ${theme.spacing['2xl']} 0;
  color: ${theme.colors.white};
`;

const Inner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${theme.colors.white};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.secondary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  line-height: 1.7;
  opacity: 0.85;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
`;

const IconLink = styled.a<{ $color?: string; $instagram?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: ${({ $color }) => $color ?? theme.colors.white};
  background: ${({ $instagram }) => $instagram ? 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' : 'transparent'};
  transition: transform 0.2s, opacity 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.85;
    border-color: ${theme.colors.white};
  }
`;

const LocationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  opacity: 0.75;
`;

const LocationIcon = styled.span`
  font-size: ${theme.fontSizes.lg};
`;

const LocationText = styled.p`
  font-size: ${theme.fontSizes.base};
`;
