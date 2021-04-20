import React from 'react';
import s from './svgLink.module.css';
import {NavLink} from 'react-router-dom';
import icons from '../../../assets/img/icons.svg';

interface SvgLinkProps {
    title: string,
    link: string,
    isExit?: boolean,
    svgClassName?: string,
    className?: string,
    urlId?: string
    props?: any,
    onClick?: any
}

const SvgLink: React.FC<SvgLinkProps> = ({title, link, isExit, className, svgClassName, urlId, ...props}) => {
    return (
        <NavLink {...props} title={title} to={link}
                 className={className ? className : s.asideBlock + (isExit ? " " + s.exit : "")}>
            <svg className={svgClassName ? svgClassName : s.icon + (isExit ? " " + s.exit_icon : "")}>
                <use xlinkHref={`${icons}#${urlId || title.toLowerCase().replace(/ /g, '_')}`}/>
            </svg>
        </NavLink>
    );
}

export default SvgLink;