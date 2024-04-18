import { ICategoryType, IUserType } from '@/mocks/types';
import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollPosition from '@/hooks/useScrollPosition';

interface IFilterProps {
  users: Array<IUserType>;
  categories: Array<ICategoryType>;
}

const Filter: FC<IFilterProps> = ({ users, categories }) => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  useEffect(
    () =>
      scrollPosition > window.innerHeight / 2
        ? setIsSidebarHidden(false)
        : setIsSidebarHidden(true),
    [scrollPosition],
  );

  const handleFilterClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <aside
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '5',
        display: 'flex',
        opacity: isSidebarHidden ? '0' : '1',
        transition:
          'transform 200ms 100ms ease-in-out, opacity 200ms ease-in-out',
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
        {categories ? (
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {categories.map((category) => (
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
        {users ? (
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {users.map((user) => (
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
  );
};

export default Filter;
