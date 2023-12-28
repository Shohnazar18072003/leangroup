import "./Header.scss";
import { logo } from "../../assets";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src={logo} alt="img" />
          </a>
          <div className="links">
            <a href="#">Продукция</a>
            <div className="brother">
              <a href="#">Ламинатные тубы</a>
              <a href="#">Экструзионные тубы</a>
              <a href="#">Другая упаковка</a>
            </div>
            <a href="#">Сертификаты</a>
            <a href="#">Наша команда</a>
            <a href="#">О нас</a>
            <a href="#">Новости</a>
            <a href="#">Вакансии</a>
            <a href="#">Контакты</a>
          </div>
          <div className="language">
            <p>
              <b>RU</b>/EN
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
