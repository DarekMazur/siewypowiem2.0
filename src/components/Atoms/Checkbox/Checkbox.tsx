import { ChangeEvent } from 'react';

const Checkbox = ({
  name,
  id,
  label,
  checked,
  handleCheck,
}: {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  handleCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label htmlFor={id}>
      <input
        type='checkbox'
        name={name}
        id={id}
        onChange={(e) => handleCheck(e)}
        checked={checked}
      />
      {label}
    </label>
  );
};

export default Checkbox;
