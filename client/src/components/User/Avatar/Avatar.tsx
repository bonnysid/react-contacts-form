import React, {FC} from "react";
import s from './avatar.module.css'
import defaultImage from '../../../assets/user.png';

type AvatarProps = {
    url?: string
}

const Avatar: FC<AvatarProps> = (props) => {
    return (
        <div className={s.container}>
            <img className={s.img} src={props.url || defaultImage} alt="avatar"/>
        </div>
    )
}