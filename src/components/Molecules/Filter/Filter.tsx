import { ICategoryType, IUserType } from '@/mocks/types';
import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollPosition from '@/hooks/useScrollPosition';
import Checkbox from '@/components/Atoms/Checkbox/Checkbox';
import {
  FilterListWrapper,
  FilterOptions,
  FilterWrapper,
} from './Filter.styles';

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
    <FilterWrapper $isSidebarHidden={isSidebarHidden} $isVisible={isVisible}>
      <FilterOptions>
        <p>Categories:</p>
        {categories ? (
          <FilterListWrapper>
            {categories.map((category) => (
              <li key={category.id}>
                <Checkbox
                  name={category.id.toString()}
                  id={category.id.toString()}
                  label={category.attributes.title}
                />
              </li>
            ))}
          </FilterListWrapper>
        ) : null}
        <p>Authors:</p>
        {users ? (
          <FilterListWrapper>
            {users.map((user) => (
              <li key={user.uuid}>
                <Checkbox
                  name={user.uuid}
                  id={user.uuid}
                  label={user.username}
                />
              </li>
            ))}
          </FilterListWrapper>
        ) : null}
        <p>Pinned:</p>
        <FilterListWrapper>
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
        </FilterListWrapper>
      </FilterOptions>
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
    </FilterWrapper>
  );
};

export default Filter;
