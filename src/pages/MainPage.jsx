import React from 'react'
import { NavLink } from 'react-router-dom'

const MainPage = () => {
    return <div style={{ textAlign: "center", fontSize: 36 }}>
        <h1>react-css</h1>
        <NavLink to="/page1">
            CSS. Часть №1 (Синтаксис + Обнуление)
        </NavLink>
        <br />
        <br />
        <NavLink to="/page2">
            CSS. Часть №2. (Свойства шрифта и текста)
        </NavLink>
        <br />
        <br />
        <NavLink to="/page3">
            CSS. Часть №3. (Свойства блоков - отступы, размеры, характеристики)
        </NavLink>
        <br />
        <br />
        <NavLink to="/page4">
            CSS. Часть №4 (Свойства блоков - стили оформления)
        </NavLink>
        <br />
        <br />
        <NavLink to="/page5">
            CSS. Часть №5 (Свойство background)
        </NavLink>
        <br />
        <br />
        <NavLink to="/flexbox">
            FLEXBOX
        </NavLink>
        <br />
        <br />
        <NavLink to="/nav">
            Navbar
        </NavLink>
    </div>
}

export default MainPage
