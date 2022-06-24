import "./Language.scss";
import { Link } from "react-router-dom";

function Language() {
  return (
    <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/" className="return">
            <img src="/" alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card"></div>

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
