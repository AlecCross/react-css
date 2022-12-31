import React, { useState } from 'react'
import styles from '../css-modules/nav.module.css'
import cx from "classnames"

export default function NavBar() {
    const [burger, setBurger] = useState(false)
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <a href="/" className={styles.header__logo}>Logo</a>
                    <div onClick={() => setBurger(!burger)} className={styles.menu__icon}>
                        <span></span>
                    </div>
                    <nav className={burger ? cx(styles.menu__body, styles._active) : styles.menu__body}>
                        <ul className={styles.menu__list}>
                            <li><a href="/page1" className={styles.menu__link}>Раздел 1</a></li>
                            <li><a href="/page2" className={styles.menu__link}>Раздел 2</a></li>
                            <li><a href="/page3" className={styles.menu__link}>Раздел 3</a></li>
                            <li>
                                <a href="/flexbox" className={styles.menu__link}>Страница 1</a>
                                <ul className={styles.menu__sub_list}>
                                    <li>
                                        <a href="/FOOTER_BOTTOM_OF_PAGE" className={styles.menu__sub_link}>Раздел стр 1</a>
                                    </li>
                                    <li>
                                        <a href="/nav" className={styles.menu__sub_link}>Раздел стр 2</a>
                                    </li>
                                    <li>
                                        <a href="/CSS_units_of_measurement" className={styles.menu__sub_link}>Раздел стр 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/page5" className={styles.menu__link}>Страница 2</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
