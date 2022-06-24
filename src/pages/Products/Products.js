import "./Products.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/Back.png";

function Products() {
  return (
    <section className="language">
      <section className="language__wrapper">
        <div className="language__left">
          <Link to="/investing" className="return">
            <img src={backArrow} alt="back arrow" className="return__img" />
          </Link>
        </div>

        <div className="language__right">
          <div className="card">
            <div className="products">
              <div className="products__heading">
                <h1 className="products__title">Here are great ways to invest with BMO! </h1>
                <span className="products__unbold">Choose a product to learn more about</span>
              </div>

              <div className="products__row-one">
                <div className="products__card">
                  <h2 className="products__label">TFSA</h2>
                  <h3 className="products__text">Tax-free savings accounts</h3>
                  </div>
                  <div className="products__card">
                  <h2 className="products__label">RRSP</h2>
                  <h3 className="products__text">Registered retirement savings plans</h3>
                  </div>
                  <div className="products__card">
                  <h2 className="products__label">RESP</h2>
                  <h3 className="products__text">Registered education saving plan</h3>
                  </div>
                  </div>
                  <div className="products__row-two">
                    <div className="products__card">
                    <h2 className="products__label">RRIF</h2>
                    <h3 className="products__text">Registered retirement income funds</h3>
                    </div>
                    <div className="products__card">
                    <h2 className="products__label">RDSP</h2>
                    <h3 className="products__text">Registered disability savings plan</h3>
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

export default Products;
