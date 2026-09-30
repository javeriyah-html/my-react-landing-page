import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter py-5">

      <div className="container py-4">

        <div className="newsletter-box p-4 p-lg-5">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <p className="small-title">
                STAY UPDATED
              </p>

              <h2 className="fw-bold text-white">
                Subscribe to Our
                <span> Newsletter</span>
              </h2>

              <p className="text-white-50">
                Subscribe to our newsletter to get information
                about our courses.
              </p>

            </div>

            <div className="col-lg-5">

              <form className="input-group">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                />

                <button className="btn btn-dark">
                  Subscribe
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;