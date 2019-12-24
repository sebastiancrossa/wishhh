// Libraries
import React, { useContext } from "react";
import WishListContext from "../../../../context/WishList/context";
import useInputState from "../../../../hooks/useInputState";

// Style
import { CustomForm, CustomInput, SubmitButton } from "./form.style";

const Form = () => {
  const wishListContext = useContext(WishListContext);

  // Form state
  const [name, setName, onNameChange, resetName] = useInputState("");
  const [link, setLink, onLinkChange, resetLink] = useInputState("");

  const handleSubmit = () => {
    const newListItem = {
      name: name,
      link: link
    };

    // Context method to create a new list item
    wishListContext.addListItem(newListItem);

    resetName();
    resetLink();
  };

  const isInvalid = name === "";

  return (
    <CustomForm>
      <h2>Add new item</h2>

      <div style={{ marginBottom: "1rem", textAlign: "left" }}>
        <div style={{ marginBottom: "0.7rem" }}>
          <p>Product name:</p>
          <CustomInput
            type="text"
            placeholder="Name..."
            value={name}
            onChange={onNameChange}
          />
        </div>

        <div>
          <p>Product link:</p>
          <CustomInput
            type="text"
            placeholder="Link..."
            value={link}
            onChange={onLinkChange}
          />
        </div>
      </div>

      <SubmitButton disabled={isInvalid} onClick={() => handleSubmit()}>
        Add item
      </SubmitButton>
    </CustomForm>
  );
};

export default Form;
