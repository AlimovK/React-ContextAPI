import React, { useContext } from "react";
import { Container, Item } from "./navbar";
import { PhotoContext } from "../store";

export const Navbar = () => {
  const [photo] = useContext(PhotoContext);
  return (
    <Container>
      <Item>Category</Item>
      <Item>New</Item>
      <Item>Top week</Item>
      <Item>Top month</Item>
      <Item>
        All Movies <span>{photo.length}</span>
      </Item>
    </Container>
  );
};
export default Navbar;
