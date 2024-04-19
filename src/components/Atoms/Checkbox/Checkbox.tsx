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
  handleCheck: () => {};
}) => {
  return (
    <label htmlFor={id}>
      {/* {console.log(checked)}
      {console.log(id)} */}
      <input
        type='checkbox'
        name={name}
        id={id}
        onChange={handleCheck}
        checked={checked}
      />
      {label}
    </label>
  );
};

export default Checkbox;
