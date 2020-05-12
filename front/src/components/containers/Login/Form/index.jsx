// Libraries
import React, { useContext } from "react";

import AuthContext from "../../../../context/Auth/context";
import useInputState from "../../../../hooks/useInputState";

// Styles
import { CustomForm, CustomInput, SubmitButton } from "./form.style";
import { ExternalLink } from "../../../../style";

const Form = () => {
  const authContext = useContext(AuthContext);
  const { loginUser } = authContext;

  // Form state
  const [email, setEmail, onEmailChange, resetEmail] = useInputState("");
  const [
    password,
    setPassword,
    onPasswordChange,
    resetPassword
  ] = useInputState("");

  const handleSubmit = () => {
    loginUser({
      email,
      password
    });

    resetEmail();
    resetPassword();
  };

  // Makes sure the password field is not empty
  const isInvalid = password === "";

  return (
    <CustomForm>
      <h2>Login</h2>

      <div style={{ marginBottom: "1rem", textAlign: "left" }}>
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

        <div style={{ marginBottom: "0.5rem" }}>
          <p>Password:</p>
          <CustomInput
            type="password"
            placeholder="Password..."
            value={password}
            onChange={onPasswordChange}
          />
        </div>

        <ExternalLink to="/register">
          Don't have an account? Register here
        </ExternalLink>

        <SubmitButton disabled={isInvalid} onClick={() => handleSubmit()}>
          Login
        </SubmitButton>
      </div>
    </CustomForm>
  );
};

export default Form;
