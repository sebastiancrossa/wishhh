// Libraries
import React, { useContext } from "react";
import ListItemContext from "../../../../context/listItem/listItemContext";

// Component Imports
import ListItem from "./ListItem";

// Styles
import { SectionContainer } from "../../../../style";

const ListItems = () => {
  const listItemContext = useContext(ListItemContext);

  // Decosntructing our items from state
  const { items } = listItemContext;

  return (
    <SectionContainer>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Your wish list items
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {items.map(item => (
          <ListItem
            name={item.name}
            link={item.link}
            isBought={item.isBought}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ListItems;
