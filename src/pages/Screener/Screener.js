
import "./Screener.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";


function Screener() {
  return (
    <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/status" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card">
            <div className="screener">
              <div className="screener__title">
                <h1 className="screener__text">
                  Are you familiar with Canadian banking?
                </h1>
                <div className="screener__cta">
                  <div className="button">Yes</div>
                  <Link to="/learnmore" className="screener__link">
                    <div className="button">No</div>
                  </Link>
                </div>
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

export default Screener;
