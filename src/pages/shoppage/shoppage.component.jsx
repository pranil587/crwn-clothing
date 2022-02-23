import react from "react";
import './shopdata'
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shoppage extends react.Component{

    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        };
    }

    render(){

        const {collections} = this.state;

        return(
            <div className="shop-page">
            {collections.map(
                ({id, title, items})=>(<CollectionPreview key={id} title ={title} items={items}></CollectionPreview>)
                )}
            </div>
        );
    }
}
export default Shoppage;