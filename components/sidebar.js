import Link from 'next/link';
import styles from '../styles/sidebar.module.scss';

export default function Sidebar() {
    return (
        <nav className={styles.nav}>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    )
}