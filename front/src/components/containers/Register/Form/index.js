// Libraries
import React, { useContext } from "react";

import AuthContext from "../../../../context/Auth/context";
import useInputState from "../../../../hooks/useInputState";

// Styles
import { CustomForm, CustomInput, SubmitButton } from "./form.style";
import { ExternalLink } from "../../../../style";

const Form = () => {
  const authContext = useContext(AuthContext);
  const { registerUser } = authContext;

  // Form state
  const [name, setName, onNameChange, resetName] = useInputState("");
  const [email, setEmail, onEmailChange, resetEmail] = useInputState("");
  const [
    password,
    setPassword,
    onPasswordChange,
    resetPassword
  ] = useInputState("");
  const [
    verifyPassword,
    setVerifyPassword,
    onVerifyPasswordChange,
    resetVerifyPassword
  ] = useInputState("");

  const handleSubmit = () => {
    registerUser({
      name,
      email,
      password
    });

    resetName();
    resetEmail();
    resetPassword();
    resetVerifyPassword();
  };

  // Makes sure both passwords entered are the same before they can make the request
  const isInvalid = password !== verifyPassword || password === "";

  return (
    <CustomForm>
      <h2>Register</h2>

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

        <div style={{ marginBottom: "0.5rem" }}>
          <p>Verify password:</p>
          <CustomInput
            type="password"
            placeholder="Password..."
            value={verifyPassword}
            onChange={onVerifyPasswordChange}
          />
        </div>

        <ExternalLink to="/login">
          Already have an account? Login here
        </ExternalLink>

        <SubmitButton disabled={isInvalid} onClick={() => handleSubmit()}>
          Register
        </SubmitButton>
      </div>
    </CustomForm>
  );
};

export default Form;
