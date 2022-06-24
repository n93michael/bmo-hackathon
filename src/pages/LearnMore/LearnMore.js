import "./LearnMore.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";
import canada from "../../assets/icons/canada.png"
import china from "../../assets/icons/china.png"
import france from "../../assets/icons/france.png"
import world from "../../assets/icons/world.png"
import us from "../../assets/icons/us.png"

function LearnMore() {
  return (
  
  <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card">
            <div className="language__center">
              <h1 className="learn__text">You're not alone! Let's help you get a better understanding of Canadian banking. What do you want to learn more about?</h1>
              <div className="button__container">
              <div className="button button__margin">Taxes</div>
              <Link className="learn__link" to="/investing"><div className="button button__margin">Investing</div></Link>
              <div className="button button__margin">Saving</div>
              <div className="button button__margin">Loan</div>
              <div className="button button__margin">Credit</div>
              <div className="button button__margin">Budgeting</div>
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
    )
}



export default LearnMore;
