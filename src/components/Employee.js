import React from "react";

function Employee() {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbennettknowsdotcom.files.wordpress.com%2F2013%2F09%2Fdrake-nothing-was-the-same.jpg%3Fw%3D549%26h%3D549&f=1&nofb=1&ipt=85d52d545002d04f185027947c131ede063e9995041927b85f42993f3477841b&ipo=images"
              height="205px" 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Employee Of The Month</h5>
             <ul>
                <li className="list-group-item"><span>Name:</span> <span>Name</span></li>
                <li className="list-group-item">Shift: <span>Shift</span></li>
                <li className="list-group-item">Section: <span>Section</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
