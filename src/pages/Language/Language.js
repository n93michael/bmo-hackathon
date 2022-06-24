import "./Language.scss";

function Language() {
  return (
    <section>
      <section>
        <div>
          <Link to="/">
            <img src="/" alt="back arrow" className="" />
          </Link>
        </div>

        <div>
          <div className="card"></div>

          <div>
            <Link to="/">Skip questionnaire and go back to the website</Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Language;
