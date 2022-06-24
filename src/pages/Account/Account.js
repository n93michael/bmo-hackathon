import "./Account.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";

function Account() {
  return (
    <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/tfsa" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card"></div>

          <div className="skip">
            <Link to="/" className="skip__link">
              Go back home
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Account;
