import './Benefits.css';

function Benefits() {

  const benefits = [
    {
      icon: '📚',
      title: 'Easy Accessible',
      text: 'Access learning materials easily from anywhere.'
    },
    {
      icon: '💰',
      title: 'More Affordable Cost',
      text: 'Learn valuable skills at an affordable cost.'
    },
    {
      icon: '⏰',
      title: 'Flexible Study Time',
      text: 'Set your own study time according to your schedule.'
    },
    {
      icon: '👨‍🏫',
      title: 'Consultation With Mentor',
      text: 'Get useful guidance from experienced mentors.'
    }
  ];

  return (
    <section className="benefits py-5">

      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-5 mb-4">

            <p className="section-title">
              WHY CHOOSE US
            </p>

            <h2 className="fw-bold">
              Make your Learning
              <span> Enjoyable</span>
            </h2>

            <p className="text-secondary">
              Set the way of learning according to your wishes
              and enjoy the lessons that we provide.
            </p>

            <div className="progress-box">
              <strong>75%</strong>
              <small>Learning Progress</small>
            </div>

          </div>

          <div className="col-lg-7">

            <div className="row g-3">

              {benefits.map((item, index) => (

                <div className="col-md-6" key={index}>

                  <div className="card border-0 shadow-sm h-100 p-3 benefit-card">

                    <div className="icon">
                      {item.icon}
                    </div>

                    <h5 className="fw-bold mt-3">
                      {item.title}
                    </h5>

                    <p className="text-secondary small">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Benefits;