import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const COLLECTION_MAP_ID={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop = state=>state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections
);

export const selectCollection =  memoize(collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections=>
            collections.find(collection=>collection.id===COLLECTION_MAP_ID[collectionUrlParam])
));