import React from "react";

import GoodsItem from "./GoodsItem";

export default function GoodsList({goods = [], addToBasket = Function.prototype}) {




  if (!goods.length) {
    return <h5>Not Found</h5>;
  }

  
  return <div className="goods">
      {goods.map((item) => (
          <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
      ))}
  </div>;
}
