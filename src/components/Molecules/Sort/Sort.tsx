import { RootState, setSortDirection, setSortValue } from '@/store';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { OnChangeValue } from 'react-select';

const Sort = () => {
  const dispatch = useDispatch();
  const sortDirection = useSelector((state: RootState) => state.sortDirection);

  const handleSortValue = (
    e: OnChangeValue<{ value: string; label: string }, false>,
  ) => {
    dispatch(setSortValue(e?.value || 'publishedAt'));
  };

  const handleSortDirection = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortDirection(e.target.value));
  };

  return (
    <form>
      <p>Sort by:</p>
      <Select
        defaultValue={{ value: 'publishedAt', label: 'Date' }}
        name='sortValue'
        options={[
          { value: 'publishedAt', label: 'Date' },
          { value: 'title', label: 'Title' },
        ]}
        onChange={handleSortValue}
      />

      <p>Sort direction:</p>
      <div>
        <label htmlFor='desc'>
          <input
            type='radio'
            name='sortDirection'
            value='desc'
            id='desc'
            checked={sortDirection === 'desc'}
            onChange={handleSortDirection}
          />
          Descending
        </label>
      </div>
      <div>
        <label htmlFor='asc'>
          <input
            type='radio'
            name='sortDirection'
            value='asc'
            id='asc'
            checked={sortDirection === 'asc'}
            onChange={handleSortDirection}
          />
          Ascending
        </label>
      </div>
    </form>
  );
};

export default Sort;
