import "./Account.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";
import accountLogo from "../../assets/images/account01.png";
import accountLogoSecond from "../../assets/images/account02.png";
import calendar from "../../assets/icons/calendar-event-line.png";
import search from "../../assets/icons/icon-search.png";

function Account() {
  return (
    <section className="language absolute">
      <div className="absolute__container">
        <a
          className="absolute__text"
          href="https://www.bmo.com/main/personal/newcomers-to-canada/"
        >
          <p className="absolute__content">
            Learn more about BMO accounts for you!
          </p>
        </a>
      </div>
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/tfsa" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card">
            <div className="account">
              <h1 className="account__title">Open a TFSA now!</h1>

              <div className="account__wrapper">
                <div className="account__card">
                  <img
                    src={accountLogo}
                    alt="account sign up"
                    className="account__logo"
                  />

                  <div className="account__content">
                    <p className="account__text">
                      <span className="account-bold">
                        Invest with a BMO professional
                      </span>
                    </p>
                    <p className="account__text">
                      Want the guidance of a BMO investment professional?
                    </p>
                  </div>

                  <div className="button button--smaller button--long">
                    <img
                      src={calendar}
                      alt="booknow"
                      className="button__icon button__icon--special"
                    />
                    <p className="button__text">Book an appointment</p>
                  </div>
                </div>

                <div className="account__card">
                  <img
                    src={accountLogoSecond}
                    alt="account sign up"
                    className="account__logo"
                  />

                  <div className="account__content">
                    <p className="account__text">
                      <span className="account-bold">Online Investing</span>
                    </p>
                    <p className="account__text">
                      Choose your preferred platform to open an account online.
                    </p>
                  </div>

                  <div className="button button--smaller button--long">
                    <img src={search} alt="booknow" className="button__icon" />
                    <p className="button__text">Explore Platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skip">
            <Link className="skip__link">Go back home</Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Account;
