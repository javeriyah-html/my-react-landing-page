import './Hero.css';

function Hero() {
  return (
    <section className="hero py-5">

      <div className="container py-4">

        <div className="row align-items-center">

          <div className="col-lg-6 hero-text">

            <p className="small-title">
              LEARN ANYTHING, ANYWHERE
            </p>

            <h1 className="display-4 fw-bold">
              Improve <span>your Skill</span>
              <br />
              with Different Way
            </h1>

            <p className="text-secondary mt-3">
              Let's take an online course to improve your skills
              in a different way. You can set your own study time
              according to your learning speed.
            </p>

            <div className="d-flex gap-3 mt-4">

              <button className="btn btn-primary px-4">
                Get Started
              </button>

              <button className="btn watch-btn">
                ▶ Watch Video
              </button>

            </div>

            <div className="certificate shadow-sm mt-4 p-3">

              <div className="certificate-icon">
                🎓
              </div>

              <div>
                <h6 className="mb-1">
                  Certificate
                </h6>

                <small className="text-secondary">
                  There are certificates for all courses.
                </small>
              </div>

            </div>

          </div>

          <div className="col-lg-6 text-center hero-image">

            <div className="hero-circle"></div>

            <img
              src="https://coursespace.vercel.app/images/home-hero.jpg"
              alt="Student learning"
              className="img-fluid"
            />

          </div>

        </div>

        <div className="row text-center border-top pt-4 mt-4">

          <div className="col-4">
            <h3 className="fw-bold">10K+</h3>
            <small className="text-secondary">Students</small>
          </div>

          <div className="col-4">
            <h3 className="fw-bold">20+</h3>
            <small className="text-secondary">Quality Course</small>
          </div>

          <div className="col-4">
            <h3 className="fw-bold">10+</h3>
            <small className="text-secondary">Experience Mentors</small>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;