import { getSortedArchives } from '@/lib/archives';
import Link from 'next/link';
import Image from 'next/image';
import slugify from 'slugify';
import defaultCover from '@/assets/dafault.jpg';

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
                <Image
                  src={article.cover || defaultCover}
                  alt={article.title}
                  width={300}
                  height={100}
                />
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
