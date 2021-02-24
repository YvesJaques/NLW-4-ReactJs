import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/yvesjaques.png" alt="Yves Jaques" />
            <div>
                <strong>Yves Jaques</strong>
                <img src="icons/level.svg" alt="Level" />
                <p>Level 1</p>
            </div>
        </div>
    )
}


