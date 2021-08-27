import React from "react";
import BasketItem from "./BasketItem";

export default function BasketList({
  order = [],
  hadleBasketShow,
  deleteToBasket,
  addToQuantity,
  removeToQuantity,
}) {
  const totalPrice = order.reduce((sum, el) => {
    return (sum += el.price * el.quantity);
  }, 0);

  return (
    <ul className="collection absolute basket-list">
      <li className="collection-item active point">
        Корзина{" "}
        <i className="material-icons " onClick={hadleBasketShow}>
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem key={item.id} {...item} deleteToBasket={deleteToBasket} 
          addToQuantity={addToQuantity}
          removeToQuantity={removeToQuantity}/>
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item active ">Общая стоимость: {totalPrice}</li>
    </ul>
  );
}
