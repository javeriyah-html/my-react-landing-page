import './Courses.css';

function Courses() {

  const courses = [
    {
      image: 'https://coursespace.vercel.app/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg',
      title: 'Modern React with MUI & Redux',
      price: '$35',
      reviews: 32
    },
    {
      image: 'https://coursespace.vercel.app/images/courses/stillness-inmotion-YSCCnRGrD-4-unsplash.jpg',
      title: 'Ethical Hacking Bootcamp Zero to Mastery',
      price: '$35',
      reviews: 14
    },
    {
      image: 'https://coursespace.vercel.app/images/courses/grovemade-RvPDe41lYBA-unsplash.jpg',
      title: 'Adobe Lightroom For Beginners',
      price: '$25',
      reviews: 6
    },
    {
      image: 'https://coursespace.vercel.app/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
      title: 'Android Development from Zero to Hero',
      price: '$25',
      reviews: 8
    },
    {
      image: 'https://coursespace.vercel.app/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg',
      title: 'UI/UX Complete Guide',
      price: '$20',
      reviews: 15
    },
    {
      image: 'https://coursespace.vercel.app/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
      title: 'Mastering Data Modeling Fundamentals',
      price: '$30',
      reviews: 7
    }
  ];

  return (
    <section id="courses" className="courses py-5">

      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="section-title">COURSES</p>

          <h2 className="fw-bold">
            Most Popular <span>Courses</span>
          </h2>
        </div>

        <div className="row g-4">

          {courses.map((course, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div className="card course-card h-100 border-0 shadow-sm">

                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                />

                <div className="card-body">

                  <h5 className="card-title fw-bold">
                    {course.title}
                  </h5>

                  <p className="text-warning mb-2">
                    ★★★★★
                    <small className="text-secondary ms-2">
                      ({course.reviews})
                    </small>
                  </p>

                  <h4 className="text-primary fw-bold">
                    {course.price}
                    <small className="text-secondary fs-6">
                      {' '}/ course
                    </small>
                  </h4>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Courses;