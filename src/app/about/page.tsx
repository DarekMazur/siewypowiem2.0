'use client';

/* eslint-disable react/no-danger */
import Image from 'next/image';
import { MainWrapper } from '@/components/Views/PageView/PageView.styles';
import { about } from '@/utils/data';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import Link from 'next/link';

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
          <h3>
            {faker.helpers.fake(
              'Hi, my name is {{person.firstName}} {{person.lastName}}!',
            )}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: about.body }} />
          <div>
            <h4>My other projects:</h4>
            <ul style={{ listStyle: 'none' }}>
              {about.inspirations.map((inspiring) => (
                <Link key={inspiring.title} href={inspiring.url}>
                  <li>{inspiring.title}</li>
                </Link>
              ))}
            </ul>
            <h4>Recommendations:</h4>
            <ul style={{ listStyle: 'none' }}>
              {about.links.map((link) => (
                <Link key={link.title} href={link.url}>
                  <li>{link.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </MainWrapper>
  );
};

export default About;
