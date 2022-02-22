import react from "react";
import './menu-item.styles.scss';

export const Menuitem=({title, imageUrl, size})=>(
    <div className={`${size} menu-item`}>
        <div
        className='background-image'
        style={{ 
            backgroundImage: `url(${imageUrl})` 
        }}
        
        ></div>
        <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);