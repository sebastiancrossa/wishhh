// Libraries
import React from "react";
import useInputState from "../../../../hooks/useInputState";

// Styles
import { CustomForm, CustomInput, SubmitButton } from "./form.style";

const Form = () => {
  // Form state
  const [name, setName, onNameChange, resetName] = useInputState("");
  const [email, setEmail, onEmailChange, resetEmail] = useInputState("");
  const [
    password,
    setPassword,
    onPasswordChange,
    resetPassword
  ] = useInputState("");

  const handleSubmit = () => {
    resetName();
    resetEmail();
    resetPassword();
  };

  // Makes sure both passwords entered are the same before they can make the request
  const isInvalid = password === "";

  return (
    <CustomForm>
      <h2>Login</h2>

      <div style={{ marginBottom: "1rem", textAlign: "left" }}>
        <div style={{ marginBottom: "0.7rem" }}>
          <p>Name:</p>
          <CustomInput
            type="text"
            placeholder="Name..."
            value={name}
            onChange={onNameChange}
            required
          />
        </div>

        <div style={{ marginBottom: "0.7rem" }}>
          <p>Email:</p>
          <CustomInput
            type="text"
            placeholder="Email..."
            value={email}
            onChange={onEmailChange}
            required
          />
        </div>

        <div style={{ marginBottom: "0.7rem" }}>
          <p>Password:</p>
          <CustomInput
            type="password"
            placeholder="Password..."
            value={password}
            onChange={onPasswordChange}
          />
        </div>

        <SubmitButton disabled={isInvalid} onClick={() => handleSubmit()}>
          Login
        </SubmitButton>
      </div>
    </CustomForm>
  );
};

export default Form;
