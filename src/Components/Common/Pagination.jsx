import React from 'react';
const Pagination = () => {
    return ( 
        <React.Fragment>
             <div className="card-footer">
              <div className="d-flex flex-row-reverse">
                <form action="#" method="get">
                  <button className="btn btn-rounded" type="submit">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </form>
                <form action="#" method="get">
                  <button className="btn btn-rounded mx-2" type="submit">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                </form>
                <span className="font-weight-normal">of 9</span>
                <select name="page" id="page" className="form-control mr-2">
                  <option value="1" selected="">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span className="font-weight-normal mr-2">Page</span>
              </div>
            </div>
        </React.Fragment>
     );
}
 
export default Pagination;