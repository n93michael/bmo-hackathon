import "./Tfsa.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";

function Tfsa() {
  return (
    <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/products" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card">
            <div className="tfsa__container">
              <h1 className="tfsa__title">Tax-Free Savings Account (TFSA)</h1>
              <p className="tfsa__definition">
                Tax-free savings accounts (TFSAs) are so much more than a
                savings account. Your savings grow tax-free and can hold various
                investment types, making TFSAs a great option to help you reach
                all of your savings and investing goals.
              </p>
              <span className="tfsa__features">
                Invest in your TFSA up to the annual limit and watch it grow,
                tax-free
              </span>
              <span className="tfsa__features">
                You can fill your TFSA with various investments, such as stocks,
                bonds, ETFs, mutual funds, and GICs
              </span>
              <span className="tfsa__features">
                Tax-free savings accounts allow you to make withdrawls, without
                penalty, whenever you’d like
              </span>
              <div className="tfsa__button-container">
                <Link className="tfsa__button ">Learn more about TFSAs</Link>
                <Link to="/account" className="tfsa__button">
                  Open an investment account
                </Link>
              </div>
            </div>
          </div>

          <div className="skip">
            <Link to="/" className="skip__link">
              Skip questionnaire and go back to the website
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Tfsa;
