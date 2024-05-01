'use client';

/* eslint-disable react/no-danger */
import Image from 'next/image';
import { MainWrapper } from '@/components/Views/PageView/PageView.styles';
import { about, contact } from '@/utils/data';
import { StyledLink } from '@/components/Atoms/Link/Link.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <MainWrapper>
      <section style={{ display: 'flex', gap: '2rem' }}>
        <div
          style={{ position: 'relative', minWidth: '20rem', height: '30rem' }}
        >
          <Image
            src={about.image}
            alt={about.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h3>{about.greetings}</h3>
          <div dangerouslySetInnerHTML={{ __html: about.body }} />
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {about.inspirations.length > 0 ? (
              <div>
                <h4>My other projects:</h4>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                  {about.inspirations.map((inspiring) => (
                    <StyledLink key={inspiring.title} href={inspiring.url}>
                      <li style={{ padding: '1rem 0' }}>{inspiring.title}</li>
                    </StyledLink>
                  ))}
                </ul>
              </div>
            ) : null}
            {about.links.length > 0 ? (
              <div>
                <h4>Recommendations:</h4>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                  {about.links.map((link) => (
                    <StyledLink key={link.title} href={link.url}>
                      <li style={{ padding: '1rem 0' }}>{link.title}</li>
                    </StyledLink>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div style={{ minWidth: '30rem' }}>
          <h3>Contact</h3>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'space-evenly',
              padding: '2rem 0 0',
            }}
          >
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
        </div>
      </section>
    </MainWrapper>
  );
};

export default About;
