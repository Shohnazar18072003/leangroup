import "./Main.scss";
import Company from "./company/Company";
import Hero from "./hero/Hero";
import Info from "./information/Info";
import News from "./news/News";
import OurTeam from "./ourTeam/OurTeam";
import Products from "./products/Product";
import Sertificat from "./sertificat/Sertificat";

const Main = () => {
  return (
    <>
      <Hero />
      <Company />
      <Sertificat />
      <Products />
      <Info />
      <OurTeam />
      <News />
    </>
  );
};

export default Main;
