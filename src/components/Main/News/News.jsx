// import React from "react";
import { news1, news2, news3 } from "../../../assets";
import "./News.scss";

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="content">
          <h1>Новости</h1>
          <div className="cards">
            <div className="card card-1">
              <img src={news1} alt="" />
              <p className="date">28.01.2022</p>
              <p className="title">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>
            <div className="card">
              <img src={news2} alt="" />
              <p className="date">21.01.2022</p>
              <p className="title">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>
            <div className="card">
              <img src={news3} alt="" />
              <p className="date">16.12.2021</p>
              <p className="title">Туба, как вид упаковки</p>
            </div>
          </div>
          <a href="#" className="btn">
            Все новости
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
