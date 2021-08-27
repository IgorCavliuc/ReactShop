export default function BasketItem({
  id,
  name,
  price,
  quantity,
  deleteToBasket = Function.prototype,
  addToQuantity = Function.prototype,
  removeToQuantity = Function.prototype,
}) {
  return (
    <li className="collection-item  ">
      {name} ({price} руб) x <i onClick={()=> removeToQuantity(id)} className='material-icons margin'>remove</i>
      {quantity}
      <i onClick={()=> addToQuantity(id)} className='material-icons margin'>add</i> = {price * quantity}
      <span className="secondary-content point">
        <i onClick={() => deleteToBasket(id)} className="material-icons">
          close
        </i>
      </span>
    </li>
  );
}
