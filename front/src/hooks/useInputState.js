import { useState } from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const setNewValue = val => {
    setValue(val);
  };

  const reset = () => {
    setValue("");
  };

  return [value, setNewValue, handleChange, reset];
};
