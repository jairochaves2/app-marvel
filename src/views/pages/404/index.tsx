import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Page404() {
  return (
    <div className={styles.Page404_root}>
      <img className={styles.Page404_image} src="/404.gif" alt="404" />
      <Link to="/" className={styles.Page404_link}>
        <Button variant="outlined" color="error">
          Voltar para o Início
        </Button>
      </Link>
    </div>
  );
}
