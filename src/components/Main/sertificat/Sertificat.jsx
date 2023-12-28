// import React from 'react'
import "./Sertificat.scss";
import { sertificat_1 } from "../../../assets";
import { sertificat_2 } from "../../../assets";
import { sertificat_3 } from "../../../assets";
import { sertificat_4 } from "../../../assets";
import { sertificat_5 } from "../../../assets";

const Sertificat = () => {
  return (
    <section className="sertificat">
      <div className="container">
        <div className="content">
          <h1>
            Качество продукции подтверждают <p>сертификаты</p>
          </h1>
          <div className="cards">
            <div className="card">
              <img src={sertificat_1} alt="" />
            </div>
            <div className="card">
              <img src={sertificat_2} alt="" />
            </div>
            <div className="card">
              <img src={sertificat_3} alt="" />
            </div>
            <div className="card">
              <img src={sertificat_4} alt="" />
            </div>
            <div className="card">
              <img src={sertificat_5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sertificat;
