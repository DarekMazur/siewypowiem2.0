import { getSortedArchives } from '@/lib/archives';
import Link from 'next/link';

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
                <Link href={`archives/${article.id}`}>{article.title}</Link>
              </li>
            ))}
        </ul>
      </header>
    </section>
  );
};

export default HomePage;
