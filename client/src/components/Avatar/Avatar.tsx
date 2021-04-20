import React, {FC} from "react";
import s from './avatar.module.css'
import defaultImage from '../../assets/user.png';

type AvatarProps = {
    url?: string
}

const Avatar: FC<AvatarProps> = (props) => {
    return (
        <div className={s.avatarBlock}>
            <img className={s.image} src={props.url || defaultImage} alt="avatar"/>
        </div>
    )
}

export default Avatar