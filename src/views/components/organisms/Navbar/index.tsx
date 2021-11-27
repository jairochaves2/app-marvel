import React from "react";
import SendMeButton from "../../atoms/Buttons/SendMeButton";
import AppBarComic from "../../molecules/AppBarComic";
import Search from "../../molecules/Search";
const Navbar: React.FC = () => {
  return (
    <AppBarComic>
      <Search />
      <SendMeButton />
    </AppBarComic>
  );
};

export default Navbar;
