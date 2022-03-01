import React from "react";
import { connect } from "react-redux";
import { selectCollections, selectCollectionsForpreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import './collections-overview.styles.scss';

const CollectionsOverview =({collections})=>(
    <div className="collections-overview">
        {collections.map(
            ({id, title, items})=>(<CollectionPreview key={id} title ={title} items={items}></CollectionPreview>)
            )}
    </div>
);

const mapStateToProps = state=>({
    collections: selectCollectionsForpreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);