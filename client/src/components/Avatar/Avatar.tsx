import React, {FC} from "react";
import s from './avatar.module.css'
import defaultImage from '../../assets/user.png';

type AvatarProps = {
    url?: string
    width: number
}

const Avatar: FC<AvatarProps> = (props) => {
    return (
        <div className={s.avatarBlock} style={{width: props.width, height: props.width}}>
            <img className={s.image} src={props.url || defaultImage} alt="avatar"/>
        </div>
    )
}

export default Avatar