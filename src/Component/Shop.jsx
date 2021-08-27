import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, isLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  }

  const deleteToBasket = (id) => {
    const deleteItem = order.filter((el) => el.id !== id);
    setOrder(deleteItem);
  };

  const addToQuantity = (id) => {

    const newOrder = order.map((el) => {
      if(el.id === id){
        return{
          ...el,
          quantity: el.quantity + 1
        }
      }
      
    })
    setOrder(newOrder)
  
  };

  const removeToQuantity = (id) => {
    const newOrder = order.map((el) => {
      if(el.id === id){
        return {
          ...el,
          quantity: el.quantity >= 2 ? el.quantity -1 : 1
        }
      }
    })
    setOrder(newOrder)
 
  };

  const hadleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        isLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} hadleBasketShow={hadleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          deleteToBasket={deleteToBasket}
          hadleBasketShow={hadleBasketShow}
          addToQuantity={addToQuantity}
          removeToQuantity={removeToQuantity}
        />
      )}
    </main>
  );
}
