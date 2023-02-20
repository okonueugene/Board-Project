import React from "react";

function Employee() {
  return (
    <>
      <div className="card text-white bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0BcwV0xQkYU8vFzEsiwTaAHaHb%26pid%3DApi&f=1&ipt=a1bd0358b05b7297fcbcde228e657c14f0b17b2a80ff54cfe9859be336e02121&ipo=images" className="card-img-top" alt="..."
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
