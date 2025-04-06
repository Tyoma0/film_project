import styles from './Header.module.css'
import { NavLink} from "react-router-dom";



export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <NavLink to="/" className={styles.navLink}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className={styles.navLink}>Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    );
}