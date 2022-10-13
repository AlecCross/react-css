import React, { useState } from 'react'
import styles from '../css-modules/nav.module.css'
import cx from "classnames"

export default function NavBar() {
    const [burger, setBurger] = useState(false)
    return (
        <div className={styles._active}>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <a href="" className={styles.header__logo}></a>
                    <div className={styles.header__menu}>
                        <div onClick={() => setBurger(!burger)} className={styles.menu__icon}>
                            <span></span>
                        </div>
                        <nav className={burger ? cx(styles.menu__body, styles._active) : styles.menu__body}>
                            <ul className={styles.menu__list}>
                                <li><a href="" className={styles.menu__link}>Раздел 1</a></li>
                                <li><a href="" className={styles.menu__link}>Раздел 2</a></li>
                                <li><a href="" className={styles.menu__link}>Раздел 3</a></li>
                                <li>
                                    <a href="" className={styles.menu__link}>Страница 1</a>
                                    <ul className={styles.menu__sub_list}>
                                        <li>
                                            <a href="" className={styles.menu__sub_link}>Раздел стр 1</a>
                                        </li>
                                        <li>
                                            <a href="" className={styles.menu__sub_link}>Раздел стр 2</a>
                                        </li>
                                        <li>
                                            <a href="" className={styles.menu__sub_link}>Раздел стр 3</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" className={styles.menu__link}>Страница 2</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}
