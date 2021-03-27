import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="collection-image">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        ></div>
        <button className="button">Add to cart</button>
      </div>
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
