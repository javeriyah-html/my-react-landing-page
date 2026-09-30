import './Footer.css';

function Footer() {
  return (
    <footer className="footer py-5">

      <div className="container">

        <div className="row g-4">

          <div className="col-lg-5">

            <h3 className="fw-bold">
              Course<span>Space</span>
            </h3>

            <p className="text-white-50 small">
              CourseSpace is an online learning platform
              where you can learn new skills and improve
              your knowledge.
            </p>

          </div>

          <div className="col-6 col-lg-2">

            <h6>Course</h6>

            <a href="#">UI/UX Design</a>
            <a href="#">Mobile Development</a>
            <a href="#">Machine Learning</a>
            <a href="#">Web Development</a>

          </div>

          <div className="col-6 col-lg-2">

            <h6>Menu</h6>

            <a href="#">Home</a>
            <a href="#courses">Courses</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#mentor">Mentor</a>

          </div>

          <div className="col-lg-3">

            <h6>About</h6>

            <a href="#">Contact Us</a>
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms</a>
            <a href="#">FAQ</a>

          </div>

        </div>

        <hr className="border-secondary mt-5" />

        <p className="text-center text-white-50 small mb-0">
          © 2026 CourseSpace. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;