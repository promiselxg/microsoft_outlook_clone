const InputField = ({ type, ...children }) => {
  return (
    <>
      <input type={type} {...children} />
    </>
  );
};

export default InputField;
