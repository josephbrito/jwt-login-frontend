import React from "react";
import styles from "../styles/RegisterLogin.module.css";

function Register() {
  return (
    <div className={styles.container_acc}>
      <div className={styles.acc}>
        <div className={styles.title}>
          <h1>Cadastre-se</h1>
        </div>

        <form className={styles.form} method="POST" action="/user/register">
          <input
            name="username"
            type="text"
            placeholder="username"
            autoComplete="off"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            autoComplete="off"
            required
          />
          <input name="password" type="password" placeholder="senha" required />
          <button>Concluir</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
