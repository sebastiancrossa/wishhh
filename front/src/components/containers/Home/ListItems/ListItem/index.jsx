// Libraries
import React, { useContext } from "react";
import WishListContext from "../../../../../context/WishList/context";

// Styles
import { Card, DeleteButton, ItemLinkButton } from "./listItem.style";

const ListItem = ({ id, name, link, isBought }) => {
  const wishListContext = useContext(WishListContext);

  const onItemDelete = async () => {
    await wishListContext.deleteItem(id);
  };

  return (
    <Card>
      <div style={{ marginBottom: "0.7rem", textAlign: "center" }}>
        <DeleteButton onClick={() => onItemDelete()} />

        <p
          style={{
            fontWeight: "700",
          }}
        >
          {name}
        </p>
        <p style={{ color: "var(--color-text-light)" }}>
          {isBought ? "Owned" : "Not owned"}
        </p>
      </div>

      <ItemLinkButton href={`${link}`} target="_blank">
        {isBought ? "Buy again" : "Buy"}
      </ItemLinkButton>
    </Card>
  );
};

export default ListItem;
