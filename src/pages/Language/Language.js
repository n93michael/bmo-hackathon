import "./Language.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";
import canada from "../../assets/icons/canada.png"
import china from "../../assets/icons/china.png"
import france from "../../assets/icons/france.png"
import world from "../../assets/icons/world.png"
import us from "../../assets/icons/us.png"

function Language() {
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
              <h1 className="language__text">Choose your language</h1>
              <div className="language__container">
                  <Link to="/status">
                    <img className="language__margin" src={canada} alt="canada flag"/>
                  </Link>
                    <img src={france} alt="china flag" />
                    <img src={us} alt="france flag" />
                    <img src={china} alt="us flag" />
                    <img src={world} alt="world icon" />
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

export default Language;
