/* eslint-disable react/no-danger */
import Image from 'next/image';
import { about, contact } from '@/utils/data/data';
import { StyledLink } from '@/components/Atoms/Link/Link.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AboutContactSection,
  AboutImage,
  AboutLinkSection,
  AboutViewWrapper,
} from './AboutView.styles';

const AboutView = () => {
  return (
    <>
      <AboutViewWrapper>
        <AboutImage>
          <Image src={about.image} alt={about.name} fill />
        </AboutImage>
        <div>
          <h3>{about.greetings}</h3>
          <div dangerouslySetInnerHTML={{ __html: about.body }} />
          <AboutLinkSection>
            {about.inspirations.length > 0 ? (
              <div>
                <h4>Moje projekty:</h4>
                <ul>
                  {about.inspirations.map((inspiring) => (
                    <StyledLink key={inspiring.title} href={inspiring.url}>
                      <li>{inspiring.title}</li>
                    </StyledLink>
                  ))}
                </ul>
              </div>
            ) : null}
            {about.links.length > 0 ? (
              <div>
                <h4>Polecane:</h4>
                <ul>
                  {about.links.map((link) => (
                    <StyledLink key={link.title} href={link.url}>
                      <li>{link.title}</li>
                    </StyledLink>
                  ))}
                </ul>
              </div>
            ) : null}
          </AboutLinkSection>
        </div>
        <AboutContactSection>
          <h3>Kontakt</h3>
          <div>
            {contact.map((contactItem) => (
              <StyledLink
                key={contactItem.type}
                $color='blue'
                href={contactItem.link}
                target='_blank'
                rel='noreferer'
              >
                <FontAwesomeIcon
                  icon={[contactItem.icon.prefix, contactItem.icon.name]}
                  style={{ fontSize: '3rem' }}
                />
              </StyledLink>
            ))}
          </div>
        </AboutContactSection>
      </AboutViewWrapper>
    </>
  );
};

export default AboutView;
