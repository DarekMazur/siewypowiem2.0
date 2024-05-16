import { getSortedArchives } from '@/lib/archives';
import Link from 'next/link';
import slugify from 'slugify';

const HomePage = () => {
  const articles = getSortedArchives();

  return (
    <section>
      <header>
        <h1>Archive</h1>
        <ul>
          {articles &&
            articles.map((article) => (
              <li key={article.id}>
                <Link
                  href={`archives/${slugify(article.title, { lower: true })}`}
                >
                  {article.title}
                </Link>
              </li>
            ))}
        </ul>
      </header>
    </section>
  );
};

export default HomePage;
