import './Status.scss';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/images/Back.png';

function Status() {
  return (
    <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/language" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card">
            <div className="status__container">
              <h1 className="status__title">
                Which status best describes you?
              </h1>
              <div className="status__button-container">
                <Link className="status__button">
                  Permanent resisdent or foreign worker
                </Link>
                <Link to="/screener" className=" status__button">
                  International student
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

export default Status;
