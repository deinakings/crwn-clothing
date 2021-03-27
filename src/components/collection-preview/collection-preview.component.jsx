import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="collection">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemParams }) => (
            <CollectionItem key={id} {...otherItemParams}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
