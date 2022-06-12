const Input = (props) => {
  const {
    type='text',
    name,
    value,
    label,
    placeholder,
  } = props;

  return (
    <div className="
      font-rubik
      w-fit
      flex
      items-center
      gap-3"
    >
      <p>{label}</p>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="
          border
          rounded
          p-2"
      />
    </div>
  )
};

export default Input;
