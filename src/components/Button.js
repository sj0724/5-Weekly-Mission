import "./Button.css";

function Button({ children }) {
  return (
    <>
      <span className="cta">{children}</span>
    </>
  );
}

export default Button;
