'use client';

/* eslint-disable @next/next/no-img-element */
import Loader from '@/components/Molecules/Loader/Loader';
import { ICategoryType } from '@/mocks/types';
import { useGetArticlesQuery } from '@/store';
import { data } from '@/utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Home = () => {
  const { data: articles, isLoading, error } = useGetArticlesQuery();

  const stringityArray = (list: Array<ICategoryType>) => {
    const stringify: Array<string> = [];

    list.forEach((listItem) => stringify.push(listItem.attributes.title));

    return stringify.join(', ');
  };

  const spliceParagraph = (paragraph: string) => {
    const stringToArray = paragraph.split(' ');

    if (stringToArray.length > 20) {
      return `${stringToArray.slice(0, 25).join(' ')}[...]`;
    }

    return paragraph;
  };

  return (
    <main
      style={{
        padding: '2rem 4rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <section
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Latest on blog</h2>
        <Loader isLoading={isLoading} isError={!!error} isReady={!!articles} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            gap: '100px',
            maxWidth: '1400px',
          }}
        >
          <div>
            <div
              style={{
                display: 'grid',
                gap: '50px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px,1fr))',
                maxWidth: '850px',
              }}
            >
              {articles
                ? articles?.data.slice(0, 6).map((article) => (
                    <article>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <p>{stringityArray(article.attributes.categories)}</p>
                        <div>
                          {article.attributes.likes.toString()}{' '}
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </div>
                      </div>
                      <Link href='/'>
                        <h3>{article.attributes.title}</h3>
                      </Link>
                      <img
                        src={article.attributes.cover.data.attributes.url}
                        alt={article.attributes.cover.data.attributes.name}
                        style={{ maxWidth: '400px', padding: '0', margin: '0' }}
                      />
                      <p>
                        {article.attributes.description ||
                          spliceParagraph(article.attributes.body)}
                      </p>
                      <p>by {article.attributes.author.username}</p>
                      <Link href='/'>Read more</Link>
                    </article>
                  ))
                : null}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '3rem 0',
              }}
            >
              <Link href='/'>Check for more</Link>
            </div>
          </div>
          <aside
            style={{
              width: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2>About</h2>
            <img
              src={data.avatar}
              alt={data.username}
              style={{
                width: '150px',
                borderRadius: '50%',
                margin: '2rem 0 0',
              }}
            />
            <p>{data.username}</p>
            <p>{data.bio}</p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Home;
