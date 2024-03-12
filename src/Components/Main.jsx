import { Login } from './Login/Login';
import styles from './main.module.css';

export const Main = () => {
    return (
        <section className={styles.mainPage}>
            <h1 className={styles.mainHeader}>Welcome to the p2p Camera page</h1>
            <Login></Login>
        </section>
    )
}