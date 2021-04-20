import React from 'react';
import preloader from '../../assets/preloader.svg';
import s from './preloader.module.css';

const Preloader: React.FC = () => {
    return (
        <div className={s.container}>
            <img className={s.image} src={preloader} alt='preloader'/>
        </div>

    )
}

export default Preloader;