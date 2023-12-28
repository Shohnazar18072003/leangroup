// import React from "react";
import "./Product.scss";
import { pro1 } from "../../../assets";
import { pro2 } from "../../../assets";
import { pro3 } from "../../../assets";
import { pro4 } from "../../../assets";
import { pro5 } from "../../../assets";

const Product = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="content">
          <h1>
            Наша <p>продукция</p>
          </h1>
          <div className="btns">
            <a href="#" className="btn">
              Ламинатные тубы
            </a>
            <a href="#" className="btn">
              Экструзионные тубы
            </a>
            <a href="#" className="btn">
              Другая упаковка
            </a>
          </div>
          <div className="cards">
            <div className="card">
              <img src={pro1} alt="" />
            </div>
            <div className="card">
              <img src={pro2} alt="" />
            </div>
            <div className="card">
              <img src={pro3} alt="" />
            </div>
            <div className="card">
              <img src={pro4} alt="" />
            </div>
            <div className="card">
              <img src={pro5} alt="" />
            </div>
          </div>
          <a href="#" className="btn2">
            Перейти в каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
