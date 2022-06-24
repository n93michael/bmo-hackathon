import "./Home.scss";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__left">
          <div className="">
            <h1 className="">
              Earn up to $350 <span className="">*</span> when you open a
              chequing account online!
            </h1>
            <div className=""></div>
            <p className="">
              Plus, get access to personalized BMO insights in the BMO app. Real
              financial progress starts with staying on top of your money.
            </p>
          </div>

          <div className="">
            <h2 className="">New to Canada?</h2>

            <Link className="" to="/">
              Start your journey with BMO
            </Link>
          </div>
        </div>

        <div className="hero__right">
          <div className="">
            <img className="" alt="/" src="/" />
            <img className="" alt="/" src="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
