// import React from 'react'
import { team1, team2, team3, team4, team5 } from "../../../assets";
import "./OurTeam.scss";

const OurTeam = () => {
  return (
    <section className="ourteam">
      <div className="container">
        <div className="content">
          <h1>
            Наша <p>команда</p>
          </h1>
          <div className="cards">
            <div className="card">
              <img src={team1} alt="" />
              <h2>Войнич Дарья</h2>
              <p>Заместитель директора по продажам</p>
              <a href="#">+375 (17) 270-53-77 (317)</a>
            </div>
            <div className="card">
              <img src={team2} alt="" />
              <h2>Мисько Екатерина</h2>
              <p>Начальник отдела сопровождения</p>
              <a href="#">+375 (17) 270-53-77 (115)</a>
              <a href="#"> +375 29 112-73-48</a>
              <a href="#">k.melnichenko@leangroup.by</a>
            </div>
            <div className="card">
              <img src={team3} alt="" />
              <h2>Дмитроченко Дмитрий</h2>
              <p>Начальник отдела допечатной подготовки</p>
              <a href="#">+375 (17) 270-53-77 (333)</a>
              <a href="#"> +375 29 360-32-26</a>
              <a href="#">dmitrochenko@leangroup.by</a>
            </div>
            <div className="card">
              <img src={team4} alt="" />
              <h2>Антух Евгений</h2>
              <p>Начальник отдела снабжения</p>
              <a href="#">+375 (17) 270-53-77 (148)</a>
              <a href="#"> +375 44 764-16-28</a>
              <a href="#">j.antuh@leangroup.by</a>
            </div>
            <div className="card">
              <img src={team5} alt="" />
              <h2>Мисник Елена</h2>
              <p>Специалист по работе с клиентами</p>
              <a href="#">+375 (17) 270-53-77 (322)</a>
              <a href="#"> +375 29 329-34-03</a>
              <a href="#">e.misnik@leangroup.by</a>
            </div>
          </div>
          <a className="btn" href="#">
            Наша команда
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
