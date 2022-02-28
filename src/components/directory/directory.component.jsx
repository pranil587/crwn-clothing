import React from "react";
import { connect } from "react-redux";
import Menuitem from "../../components/menu-item/menu-item.component"
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import './directory.styles.scss';

const Directory = ({directorySections})=>(    
  <div className='directory-menu'>
      {directorySections.map(({id, ...otherSectionProps})=>(
          <Menuitem key={id} {...otherSectionProps}></Menuitem>))}
  </div>
);

const mapStateToProps= state=>({
  directorySections: selectDirectorySections(state)
});
export default connect(mapStateToProps)(Directory);