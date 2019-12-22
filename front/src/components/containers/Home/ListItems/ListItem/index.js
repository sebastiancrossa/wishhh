// Libraries
import React from "react";

// Styles
import { Card, ItemLinkButton } from "./listItem.style";

const ListItem = ({ name, link, isBought }) => {
  return (
    <Card>
      <div style={{ marginBottom: "0.7rem", textAlign: "center" }}>
        <p
          style={{
            fontWeight: "700"
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
