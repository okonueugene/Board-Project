import React from "react";

function Employee() {
  return (
    <>
      <div className="card text-white bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.xF_yBQPjnKLxtesxv8MijQHaHa%26pid%3DApi&f=1&ipt=f781db0a7f3993d60a0176cb7912d0aafbd2a50da47de9ef76c6773362c6547f&ipo=images"
              height="205px" width="205px"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-white bg-dark">Employee Of The Month</h5>
             <ul>
                <li className="list-group-item text-white bg-dark"><span>Name:</span> <span>Name</span></li>
                <li className="list-group-item text-white bg-dark" >Shift: <span>Shift</span></li>
                <li className="list-group-item text-white bg-dark">Section: <span>Section</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
