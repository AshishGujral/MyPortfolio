import React from 'react'
import './Education.css';
const Education = () => {
  return (
  <section className="section" id="education">
  <div className="containe">
      <h2 className="mb-5"><span className="text-danger">Education</span><span className="line"></span>  </h2>
      
      <div className="row">
          <div className="col-md-6 col-lg-4">
              <div className="card">
                  <div className="card-body">
                      <h6 className="title text-danger">2021 - Present</h6>
                      <p><b>Post Baccalaureate Diploma - Douglas College</b></p>
                      <p className="subtitle">Emerging Technology.</p>
                      <hr></hr>
                      <h6 className="title text-danger">2013- 2016</h6>
                      <p><b>Bachelor</b> of Computer Application<span><b> (Panjab University)</b></span></p>
                  </div>
              </div>
          </div>
          
      </div>
  </div>
</section>)
}

export default Education;