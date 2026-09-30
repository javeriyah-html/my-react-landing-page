import './Mentors.css';

function Mentors() {

  const mentors = [
    {
      name: 'Leon S Kennedy',
      role: 'Machine Learning',
      company: 'Google'
    },
    {
      name: 'Nguyễn Thuy',
      role: 'Android Development',
      company: 'Airbnb'
    },
    {
      name: 'Rizki Known',
      role: 'Fullstack Development',
      company: 'Microsoft'
    },
    {
      name: 'Jhon Dwirian',
      role: 'UI/UX Design',
      company: 'Grab'
    }
  ];

  return (
    <section id="mentor" className="mentors py-5">

      <div className="container py-5">

        <div className="text-center mb-5">

          <p className="section-title">
            MENTORS
          </p>

          <h2 className="fw-bold">
            Our Expert <span>Mentors</span>
          </h2>

        </div>

        <div className="row g-4">

          {mentors.map((mentor, index) => (

            <div className="col-sm-6 col-lg-3" key={index}>

              <div className="card mentor-card text-center border-0 shadow-sm p-4">

                <div className="mentor-avatar">
                  {mentor.name.charAt(0)}
                </div>

                <h5 className="fw-bold mt-3">
                  {mentor.name}
                </h5>

                <p className="text-secondary small mb-2">
                  {mentor.role}
                </p>

                <span className="text-primary fw-bold">
                  {mentor.company}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Mentors;