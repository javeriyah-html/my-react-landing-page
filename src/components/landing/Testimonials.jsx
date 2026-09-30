import './Testimonials.css';

function Testimonials() {

  const students = [
    {
      image: 'https://coursespace.vercel.app/images/avatars/5.jpg',
      name: 'Ashley Graham',
      role: 'Back-End Developer',
      title: 'Detailed learning materials'
    },
    {
      image: 'https://coursespace.vercel.app/images/avatars/1.jpg',
      name: 'Luis Sera',
      role: 'UI/UX Engineer',
      title: 'Detailed learning materials'
    },
    {
      image: 'https://coursespace.vercel.app/images/avatars/2.jpg',
      name: 'Riski',
      role: 'Software Engineer',
      title: 'Best Quality Online Course!'
    },
    {
      image: 'https://coursespace.vercel.app/images/avatars/3.jpg',
      name: 'Nguyễn Văn',
      role: 'FullStack Designer',
      title: 'Very complete class'
    },
    {
      image: 'https://coursespace.vercel.app/images/avatars/4.jpg',
      name: 'Diana Jordan',
      role: 'SEO Expert',
      title: 'Great Quality!'
    }
  ];

  return (
    <section
      id="testimonial"
      className="testimonials py-5"
    >

      <div className="container py-5">

        <div className="text-center mb-5">

          <p className="section-title">
            TESTIMONIAL
          </p>

          <h2 className="fw-bold">
            What our Students <span>Say</span>
          </h2>

        </div>

        <div className="row g-4">

          {students.map((student, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div className="card testimonial-card h-100 border-0 shadow-sm p-4">

                <div className="quote">
                  “
                </div>

                <h5 className="fw-bold">
                  {student.title}
                </h5>

                <p className="text-secondary small">
                  Classes provide detailed material and useful
                  practical knowledge for learning new skills.
                </p>

                <div className="d-flex align-items-center mt-auto pt-3">

                  <img
                    src={student.image}
                    alt={student.name}
                    className="student-img"
                  />

                  <div className="ms-3">

                    <h6 className="mb-1 fw-bold">
                      {student.name}
                    </h6>

                    <small className="text-secondary">
                      {student.role}
                    </small>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;