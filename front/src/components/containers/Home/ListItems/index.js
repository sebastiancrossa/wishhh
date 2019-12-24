// Libraries
import React, { useContext } from "react";
import WishListContext from "../../../../context/WishList/context";
import { CSSTransition } from "react-transition-group";

// Component Imports
import ListItem from "./ListItem";

// Styles
import { SectionContainer } from "../../../../style";
import { Grid } from "./listItems.styled";

const ListItems = () => {
  const wishListContext = useContext(WishListContext);

  // Deconstructing our items from state
  const { items } = wishListContext;

  return (
    <SectionContainer>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Your wish list items
      </h1>

      <Grid>
        {items.map(item => (
          <CSSTransition key={item.id} timeout={500} classNames="item">
            <ListItem
              id={item.id}
              name={item.name}
              link={item.link}
              isBought={item.isBought}
            />
          </CSSTransition>
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default ListItems;
