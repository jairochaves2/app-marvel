import React from "react";
import { useLocation } from "react-router";
import { isSendMePage } from "../../../../helpers/MarvelApi.helper";
import Navbar from "../../organisms/Navbar";
import NavbarSendMe from "../../organisms/NavBarSendMe";

export default function Header() {
  const { pathname } = useLocation();

  const isSendMe = isSendMePage(pathname);
  return <header>{isSendMe ? <NavbarSendMe /> : <Navbar />}</header>;
}
