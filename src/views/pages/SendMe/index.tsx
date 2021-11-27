import React from "react";
import { useNavigate } from "react-router";
import { useSelectedComics } from "../../../hooks/contexts.hooks";
import Header from "../../components/templates/Header";
import Main from "../../components/templates/Main";

export default function SendMe() {
  const { comicsSelect } = useSelectedComics();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (comicsSelect.length === 0) {
      navigate("/");
    }
  }, [navigate, comicsSelect]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
