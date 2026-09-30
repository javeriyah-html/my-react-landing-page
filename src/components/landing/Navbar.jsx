import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3">
      <div className="container">

        <a className="navbar-brand fw-bold fs-3" href="#">
          Course<span>Space</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <ul className="navbar-nav mx-auto gap-lg-3">

            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#courses">
                Courses
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#testimonial">
                Testimonial
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#mentor">
                Mentor
              </a>
            </li>

          </ul>

          <div className="d-flex gap-2">

            <button className="btn login-btn">
              Sign In
            </button>

            <button className="btn signup-btn">
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;