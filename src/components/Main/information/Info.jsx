// import React from 'react'
import "./Info.scss";
import { user } from "../../../assets";
import { tel } from "../../../assets";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="content">
          <h1>
            Получить подробную <p>информацию</p>
          </h1>
          <p className="text">
            Просто заполните форму, наш менеджер свяжется с вами в ближайшее
            время
          </p>
          <form>
            <div className="input">
              <input type="text" name="text" id="text" placeholder="Ваше имя" />
              <img src={user} alt="" />
            </div>
            <div className="input2">
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="+375 (29) 0000000"
              />
              <img src={tel} alt="" />
            </div>
            <textarea name="commit" id="commit " cols="61" rows="5"></textarea>
            <button type="submit">Получить информацию</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Info;
