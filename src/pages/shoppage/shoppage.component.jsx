import React from 'react';
import '../../redux/shop/shopdata'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';


const Shoppage =({match})=>{
    return (
    <div className="shop-page">  
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
)};

export default Shoppage;