import React from "react";

function Employee() {
  return (
    <>
      <div className="card text-white bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://roselinda.netlify.app/img/profile.jpg" className="card-img-top" alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title text-white bg-dark text-center">Employee Of The Month</h5>
             <ul>
                <li className="list-group-item text-white bg-dark "><span className="text-center">Name:</span> <span className= "text-center">Name</span></li>
                <li className="list-group-item text-white bg-dark" >Shift: <span className="text-center">Shift</span></li>
                <li className="list-group-item text-white bg-dark">Section: <span className="">Section</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
