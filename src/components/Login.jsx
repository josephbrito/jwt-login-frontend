import React from "react";
import styles from "../styles/RegisterLogin.module.css";

function Login() {
  return (
    <div className={styles.container_acc}>
      <div className={styles.acc}>
        <div className={styles.title}>
          <h1>Login</h1>
        </div>

        <form className={styles.form} method="POST" action="/user/login">
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
          <input
            name="password"
            type="password"
            placeholder="senha"
            autoComplete="off"
            required
          />
          <button>Concluir</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
