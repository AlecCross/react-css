import React from 'react'
import { NavLink } from 'react-router-dom'
import ProgressBar from './ProgressBar'

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
        <br />
        <br />
        <NavLink to="/multi-button-menu">
            MultiButtonMenu
        </NavLink>
        <br />
        <br />
        <NavLink to="/CSSunitsOfMeasurement">
            CSS units of measurement
        </NavLink>
        <br />
        <br />
        <NavLink to="/FOOTER_BOTTOM_OF_PAGE">
            FOOTER BOTTOM OF PAGE. FLEX
        </NavLink>
        <br />
        <br />
        <NavLink to="/CssSelectors">
            CssSelectors
        </NavLink>
        <br />
        <br />
        <NavLink to="/PseudoClasses">
            PseudoClasses
        </NavLink>
        <br />
        <br />
        <NavLink to="/CssEffects">
            CssEffects
        </NavLink>
        <br />
        <br />
        <NavLink to="/CssTransformsTransitions">
            CssTransformsTransitions
        </NavLink>
        <br />
        <br />
        <NavLink to="/Animation">
            Animation
        </NavLink>
        <br />
        <br />
        <NavLink to="/PreprocessorsSassScssStylus">
            Preprocessors: sass, scss, Stylus
        </NavLink>
        <br />
        <br />
        <NavLink to="/Debugging">
            Debugging
        </NavLink>
        <br />
        <br />
        <NavLink to="/ProgressBar">
            ProgressBar
        </NavLink>
    </div>
}

export default MainPage
