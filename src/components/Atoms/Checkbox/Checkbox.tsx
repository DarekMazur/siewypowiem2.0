const Checkbox = ({
  name,
  id,
  label,
}: {
  name: string;
  id: string;
  label: string;
}) => {
  return (
    <label htmlFor={id}>
      <input type='checkbox' name={name} id={id} />
      {label}
    </label>
  );
};

export default Checkbox;
