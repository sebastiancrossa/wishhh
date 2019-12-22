// Libraries
import React, { useContext } from "react";
import ListItemContext from "../../../../context/listItem/listItemContext";
import useInputState from "../../../../hooks/useInputState";

// Style
import { CustomForm } from "./form.style";

const Form = () => {
  const listItemContext = useContext(ListItemContext);

  // Form state
  const [name, setName, onNameChange, resetName] = useInputState("");
  const [link, setLink, onLinkChange, resetLink] = useInputState("");

  const handleSubmit = () => {
    const newListItem = {
      name: name,
      link: link
    };

    // Context method to create a new list item
    listItemContext.addListItem(newListItem);

    resetName();
    resetLink();
  };

  return (
    <CustomForm>
      <h2>Add new item</h2>

      <div>
        <p>Product name:</p>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={onNameChange}
        />
      </div>

      <div>
        <p>Product link:</p>
        <input
          type="text"
          placeholder="Link..."
          value={link}
          onChange={onLinkChange}
        />
      </div>

      <button onClick={() => handleSubmit()}>Add item</button>
    </CustomForm>
  );
};

export default Form;
