import React from 'react'
import { NavLink } from 'react-router-dom'

const BackToMain = () => {
    return <NavLink to="/">
        <button style={{ textAlign: "center", fontSize: 48 }}>На главную</button>
    </NavLink>
}

export default BackToMain
