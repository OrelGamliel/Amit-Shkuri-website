import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';
import { theme } from '@/lib/theme';
import { siteContent } from '@/content';

const { footer, contact, nav } = siteContent;

const whatsappUrl = `https://wa.me/${contact.whatsappNumber}`;

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Brand>
          <BrandName>{contact.name}</BrandName>
          <Tagline>{footer.tagline}</Tagline>
        </Brand>

        <Links>
          {nav.links.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </Links>

        <ContactBlock>
          <IconRow>
            <IconLink href={`tel:${contact.phone}`} aria-label="התקשרי">
              <FaPhone size={18} />
            </IconLink>

            <IconLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ" $whatsapp>
              <FaWhatsapp size={20} />
            </IconLink>

            {contact.instagram && (
              <IconLink href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם" $instagram>
                <FaInstagram size={20} />
              </IconLink>
            )}
          </IconRow>

          <Location>{contact.location}</Location>
        </ContactBlock>
      </Inner>

      <BottomBar>
        <Copyright>{footer.copyright}</Copyright>
      </BottomBar>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
  }
`;

const Brand = styled.div``;

const BrandName = styled.p`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.p`
  font-size: ${theme.fontSizes.sm};
  opacity: 0.75;
`;

const Links = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  font-size: ${theme.fontSizes.sm};
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconLink = styled.a<{ $whatsapp?: boolean; $instagram?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  color: ${({ $whatsapp }) => ($whatsapp ? '#25D366' : theme.colors.white)};
  background: ${({ $instagram }) => $instagram ? 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' : 'transparent'};
  transition: opacity 0.2s, border-color 0.2s, transform 0.2s;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    border-color: ${theme.colors.white};
  }
`;

const Location = styled.span`
  font-size: ${theme.fontSizes.sm};
  opacity: 0.7;
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1rem 1.5rem;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: ${theme.fontSizes.sm};
  opacity: 0.6;
`;
