'use client';

import Loader from '@/components/Molecules/Loader/Loader';
import ArticlesList from '@/components/Organism/ArticlesList/ArticlesList';
import {
  useGetArticlesQuery,
  useGetCategoriesQuery,
  useGetUsersQuery,
} from '@/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

/*
! important features list:
TODO pinned articles on homepage
TODO hero section with dynamic content depend of path
TODO blog page filters
TODO blog page sorting
*/

export const Blog = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useGetArticlesQuery({ pageSize: 6, page: 1 });

  const {
    data: categories,
    isLoading: isCatLoading,
    error: catError,
  } = useGetCategoriesQuery({ pageSize: 25, page: 1 });

  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useGetUsersQuery({ pageSize: 25, page: 1 });

  const [isVisible, setIsVisible] = useState(false);

  const handleFilterClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <main
      style={{
        paddingBottom: '3rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Loader isLoading={isLoading} isError={!!error} isReady={!!articles} />
      <aside
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '5',
          display: 'flex',
          transition: 'transform 200ms 100ms ease-in-out',
          transform: isVisible ? 'translateX(0)' : 'translateX(-20rem)',
        }}
      >
        <div
          style={{
            width: '20rem',
            padding: '6rem 1rem 0',
            margin: '0',
            height: '100vh',
            background: 'white',
          }}
        >
          <p>Categories:</p>
          <Loader
            isLoading={isCatLoading}
            isError={!!catError}
            isReady={!!categories}
          />
          {categories ? (
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {categories.data.map((category) => (
                <li key={category.id}>
                  <label htmlFor={category.id.toString()}>
                    <input
                      type='checkbox'
                      name={category.id.toString()}
                      id={category.id.toString()}
                    />
                    {category.attributes.title}
                  </label>
                </li>
              ))}
            </ul>
          ) : null}
          <p>Authors:</p>
          <Loader
            isLoading={isUsersLoading}
            isError={!!usersError}
            isReady={!!users}
          />
          {users ? (
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {users.data.map((user) => (
                <li key={user.uuid}>
                  <label htmlFor={user.uuid}>
                    <input type='checkbox' name={user.uuid} id={user.uuid} />
                    {user.username}
                  </label>
                </li>
              ))}
            </ul>
          ) : null}
          <p>Pinned:</p>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li>
              <label htmlFor='pinned'>
                <input type='checkbox' name='pinned' id='pinned' />
                Yes
              </label>
            </li>
            <li>
              <label htmlFor='not_pinned'>
                <input type='checkbox' name='not_pinned' id='not_pinned' />
                No
              </label>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          icon={['fas', 'filter']}
          style={{
            marginTop: '6rem',
            padding: '2rem 2rem 2rem 0.5rem',
            background: 'white',
            borderRadius: '0 5px 5px 0',
          }}
          onClick={handleFilterClick}
        />
      </aside>
      {articles ? (
        <ArticlesList articles={articles.data} meta={articles.meta} />
      ) : null}
    </main>
  );
};

export default Blog;
