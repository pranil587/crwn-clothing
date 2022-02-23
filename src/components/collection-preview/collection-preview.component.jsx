import react from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview=({title, items})=>(

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,idx)=>idx<4).map(
                ({id, name, imageUrl, price}) => 
                (<CollectionItem key={id} name={name} imageUrl={imageUrl} price={price} ></CollectionItem>))}
        </div>
    </div>
);

export default CollectionPreview;