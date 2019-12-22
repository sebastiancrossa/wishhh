// Libraries
import React from "react";

// Styles
import { Card } from "./listItem.style";

const ListItem = ({ name, link, isBought }) => {
  return (
    <Card>
      <p>{name}</p>
      <p>{link}</p>
      <p>{isBought ? "Item bought" : "Not yet owned"}</p>
    </Card>
  );
};

export default ListItem;
