/* eslint-disable react-hooks/exhaustive-deps */
import { ICategoryType, IUserType } from '@/mocks/types';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useScrollPosition from '@/hooks/useScrollPosition';
import Checkbox from '@/components/Atoms/Checkbox/Checkbox';
import {
  modifyCategoriesFilters,
  modifyPinnedFilters,
  modifyUsesFilters,
} from '@/store';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  const [filteredCategories, setFilteredCategories] = useState<
    Array<ICategoryType | { id: number }>
  >([...categories, { id: -1 }]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filteredIsSticky, setFilteredIsSticky] = useState<Array<string>>([
    'pinned',
    'not_pinned',
  ]);

  useEffect(() => {
    const categoriesToDisplay: Array<number> = [];
    filteredCategories.map((category) => categoriesToDisplay.push(category.id));
    dispatch(modifyCategoriesFilters(categoriesToDisplay));
  }, [filteredCategories]);

  useEffect(() => {
    const usersToDisplay: Array<string> = [];
    filteredUsers.map((user) => usersToDisplay.push(user.uuid));
    dispatch(modifyUsesFilters(usersToDisplay));
  }, [filteredUsers]);

  useEffect(() => {
    dispatch(modifyPinnedFilters([...filteredIsSticky]));
  }, [filteredIsSticky]);

  useEffect(
    () =>
      [
        ...document.querySelectorAll<HTMLInputElement>('input[type=checkbox]'),
      ].some((input) => !input.checked)
        ? setIsSidebarHidden(false)
        : scrollPosition > window.innerHeight / 2
          ? setIsSidebarHidden(false)
          : setIsSidebarHidden(true),
    [scrollPosition],
  );

  const handleFilterClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleCheck = (
    e: ChangeEvent<HTMLInputElement>,
    model: 'categories' | 'users' | 'isSticky',
  ) => {
    if (e.target.checked) {
      switch (model) {
        case 'categories':
          if (e.target.id === 'no_category') {
            setFilteredCategories((prevState) => [...prevState, { id: -1 }]);
            break;
          }
          setFilteredCategories((prevState) => [
            ...prevState,
            categories.find(
              (category) => category.id === Number(e.target.id),
            ) as ICategoryType,
          ]);
          break;
        case 'users':
          setFilteredUsers((prevState) => [
            ...prevState,
            users.find((user) => user.uuid === e.target.id) as IUserType,
          ]);
          break;
        case 'isSticky':
          setFilteredIsSticky((prevState) => [...prevState, e.target.id]);
          break;
        default:
          break;
      }
    } else {
      switch (model) {
        case 'categories':
          if (e.target.id === 'no_category') {
            setFilteredCategories((prevState) =>
              prevState.filter((category) => category.id !== -1),
            );
            break;
          }
          setFilteredCategories((prevState) =>
            prevState.filter((category) => category.id !== Number(e.target.id)),
          );
          break;
        case 'users':
          setFilteredUsers((prevState) =>
            prevState.filter((user) => user.uuid !== e.target.id),
          );
          break;
        case 'isSticky':
          setFilteredIsSticky((prevState) =>
            prevState.filter((pinned) => pinned !== e.target.id),
          );
          break;
        default:
          break;
      }
    }
  };

  return (
    <FilterWrapper $isSidebarHidden={isSidebarHidden} $isVisible={isVisible}>
      <div>
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
                    checked={
                      !!filteredCategories.find(
                        (checkedCategory) => checkedCategory.id === category.id,
                      )
                    }
                    handleCheck={(e) => handleCheck(e, 'categories')}
                  />
                </li>
              ))}
              <li>
                <Checkbox
                  name='no_category'
                  id='no_category'
                  label='No category'
                  checked={
                    !!filteredCategories.find(
                      (checkedCategory) => checkedCategory.id === -1,
                    )
                  }
                  handleCheck={(e) => handleCheck(e, 'categories')}
                />
              </li>
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
                    checked={
                      !!filteredUsers.find(
                        (checkedUser) => checkedUser.uuid === user.uuid,
                      )
                    }
                    handleCheck={(e) => handleCheck(e, 'users')}
                  />
                </li>
              ))}
            </FilterListWrapper>
          ) : null}
          <p>Pinned:</p>
          <FilterListWrapper>
            {[
              { status: 'pinned', label: 'Yes' },
              { status: 'not_pinned', label: 'No' },
            ].map((pin) => (
              <li key={pin.status}>
                <Checkbox
                  name={pin.status}
                  id={pin.status}
                  label={pin.label}
                  checked={
                    !!filteredIsSticky.find((checked) => checked === pin.status)
                  }
                  handleCheck={(e) => handleCheck(e, 'isSticky')}
                />
              </li>
            ))}
          </FilterListWrapper>
        </FilterOptions>
        <div>
          <label htmlFor='sortValue'>
            Sort by:
            <select name='sortValue' id='sortValue'>
              <option value='title'>Title</option>
              <option value='publishedAt'>Date</option>
            </select>
          </label>
        </div>
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
    </FilterWrapper>
  );
};

export default Filter;
