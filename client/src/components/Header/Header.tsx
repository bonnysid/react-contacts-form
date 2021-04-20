import React, {FC} from "react";
import AuthBlock from "../AuthBlock/AuthBlock";
import s from './header.module.css'
import SvgLink from "../SvgLink/SvgLink";

const Header: FC = (props) => {
    return (
        <header className={s.header}>
            <nav className={s.navbar}>
                <SvgLink title={'Profile'} link={'/profile'}/>
                <SvgLink title={'Users'} link={'/users'}/>
            </nav>
            <AuthBlock/>
        </header>
    )
}

export default Header