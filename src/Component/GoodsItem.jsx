import React from "react";

export default function GoodsItem({
  id,
  name,
  description,
  price,
  full_background,
  addToBasket = Function.prototype,
}) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={full_background} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {name}
        </span>
        <p>{description}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {name}
          <i className="material-icons right">close</i>
        </span>
        <p>{description}</p>
      </div>

      <div className="card-action">
        <button
          className="btn"
          onClick={() => {
            addToBasket({ id, name, price });
          }}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} руб
        </span>
      </div>
    </div>
  );
}
