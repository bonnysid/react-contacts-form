import React, {FC} from "react";
import { NavLink } from "react-router-dom";
import s from './header.module.css'

const Header: FC = (props) => {
    return (
        <header className={s.header}>
            <nav>
                <NavLink to={'/users'}/>
                <NavLink to={'/profile'}/>
            </nav>
        </header>
    )
}

export default Header