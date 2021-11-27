import React from "react";
import ButtonSendMe from "../../atoms/Buttons/ButtonSendMe";
import AppBarComic from "../../molecules/AppBarComic";
import Search from "../../molecules/Search";
const Navbar: React.FC = () => {
  return (
    <AppBarComic>
      <Search />
      <ButtonSendMe />
    </AppBarComic>
  );
};

export default Navbar;
