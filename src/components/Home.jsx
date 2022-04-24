import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function RegLog() {
  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <Link to="/user/register">
          <button>Clique aqui para se cadastrar</button>
        </Link>
      </div>

      <div className={styles.login}>
        <Link to="/user/login">
          <button>Clique aqui para entrar na sua conta</button>
        </Link>
      </div>
    </div>
  );
}

export default RegLog;
