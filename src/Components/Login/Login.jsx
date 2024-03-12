import styles from "./login.module.css";


export const Login = () => {
    return (
        <section className={styles.login}>
            <form action="">
            <span>Login</span>

                <input type="text" />
                <input type="text" />
                <button type="submit">Sign-in</button>
            </form>
        </section>
    )
}