import "./Investing.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";

function Investing() {
  return (
    <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/learnmore" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card">
            <div className="investing">
              <div className="investing__wrapper">
                <h1 className="investing__title">What is Investing ?</h1>

                <div className="investing__container">
                  <p className="investing__content investing__content--top">
                    <span className="investing-bold">
                      Immigrants in Canada tend to be supersavers.
                    </span>
                    According to Statistics Canada, immigrant families who have
                    been in Canada for more than two decades tend to be worth
                    more than families who were born in the country. These
                    savings can fund their dreams, be it a new home, children's
                    education, or a happy retirement.
                  </p>

                  <p className="investing__content">
                    So how can you join the ranks of these immigrant
                    supersavers? You learn how to make the system work for you.
                    And in Canada, the system is built to help people, including
                    newcomers, invest their income and savings to generate
                    returns.
                    <span className="investing-bold">
                      This can be overwhelming but we're here to help!
                    </span>
                  </p>
                </div>
              </div>

              <div className="investing__bottom">
                <Link className="button button--smaller" to="/products">
                  Learn more
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

export default Investing;
