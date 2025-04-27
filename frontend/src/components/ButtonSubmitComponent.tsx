type ButtonSubmitComponentProps = {
  text: string;
};
const ButtonSubmitComponent = ({ text }: ButtonSubmitComponentProps) => {
  return (
    <button type="submit" className="login-form-submitBtn">
      {text}
    </button>
  );
};

export default ButtonSubmitComponent;
