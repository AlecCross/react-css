import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import buttonStyle from '../css-modules/multButton.module.css'

export default function MultiButtonMenu() {
    const [buttonIsPressed, setButtonIsPressed] = useState(false)

    return <>
        <h1>Multi Button Menu</h1>
        <div
            onClick={() => setButtonIsPressed(!buttonIsPressed)}
            className={buttonStyle.mainButton}
        >
            {buttonIsPressed ?
                <>
                    <button className={buttonStyle.secondButton}>
                        <NavLink className={buttonStyle.navLink} to="/nav">
                            💗
                        </NavLink>
                    </button>
                    <button className={buttonStyle.thirdButton}>
                        <NavLink className={buttonStyle.navLink} to="/flexbox">
                            🛒
                        </NavLink>
                    </button>
                </> :
                <></>
            }
        </div>
    </>
}
