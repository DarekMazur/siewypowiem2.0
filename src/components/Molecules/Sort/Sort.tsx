import { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';

const Sort = () => {
  const [sortValue, setSortValue] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSortValue = (
    e: OnChangeValue<{ value: string; label: string }, false>,
  ) => {
    console.log(sortValue);
    setSortValue(e?.value || 'date');
  };

  const handleSortDirection = (e) => {
    setSortDirection(e.target.value);
  };

  return (
    <form>
      <p>Sort by:</p>
      <Select
        defaultValue={{ value: 'date', label: 'Date' }}
        name='sortValue'
        options={[
          { value: 'date', label: 'Date' },
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
