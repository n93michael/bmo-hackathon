import "./Home.scss";
import { Link } from "react-router-dom";
import phone from "../../assets/images/phone.png";
import credit from "../../assets/images/credit.png";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__left">
          <div className="hero__card">
            <h1 className="hero__text">
              Earn up to $350 <span className="hero__text--highlighted">*</span>{" "}
              when you open a chequing account online!
            </h1>
            <div className="hero__underline"></div>
            <p className="hero__description">
              Plus, get access to{" "}
              <span className="hero__description--bold">
                personalized BMO insights
              </span>{" "}
              in the BMO app. Real financial progress starts with staying on top
              of your money.
            </p>
          </div>

          <div className="hero__cta">
            <h2 className="hero__question">New to Canada?</h2>

            <Link className="hero__button" to="/language">
              Start your journey with BMO
            </Link>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__overlay">
            <img className="hero__phone" alt="phone" src={phone} />
            <img className="hero__credit" alt="credit card" src={credit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
