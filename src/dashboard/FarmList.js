/* eslint-disable */

import React, {useState, useEffect} from 'react';
import './navbar/navStyle.css'
import {Button, Modal} from 'react-bootstrap'


const FarmList = ()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return(
        <div className="dashboard col-md-12" style={{height: '100%'}}>
            <div className="farmtitle">
                <h4 style={{color:'#191D38'}}>Farm List</h4>
                <button type="button" className="cusBut">Fund wallet</button>
            </div>

            <div className="farmList mt-4 p-4">
            <div class="table-responsive">
            <table class="table">
                    
            <thead>
                <tr>
                <th scope="col">Title </th>
                <th scope="col">Price per unit</th>
                <th scope="col">Status</th>
                <th scope="col">Interest</th>
                <th scope="col">Maturity</th>
                <th scope="col">Avaliable Units</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td scope="row">Wheat Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@mdo</td>
                <td>180 days</td>
                <td>20 units</td>
                <td><button type="button" className="cusBut" onClick={handleShow}>Buy</button></td>

                </tr>
                <tr>
                <td scope="row">Maize Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@fat</td>
                <td>180 days</td>
                <td>20 units</td>
                <td><button type="button" className="cusBut" onClick={handleShow}>Buy</button></td>

                </tr>
                <tr>
                <td scope="row">Poultry Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@twitter</td>
                <td>160 days</td>
                <td>20 units</td>
                <td><button type="button" className="cusBut" onClick={handleShow}>Buy</button></td>

                </tr>
                <tr>
                <td scope="row">Poultry Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@twitter</td>
                <td>120 days</td>
                <td>20 units</td>
                <td><button type="button" className="cusBut" onClick={handleShow}>Buy</button></td>

                </tr>
                <tr>
                <td scope="row">Poultry Farm</td>
                <td>#50,000</td>
                <td>Open</td>
                <td>@twitter</td>
                <td>130 days</td>
                <td>20 units</td>
                <td><button type="button" className="cusBut" onClick={handleShow}>Buy</button></td>

                </tr>
            </tbody>
            </table>
            </div>
            </div>




            <Modal show={show} onHide={handleClose}>
        <Modal.Body className="modalBody">
                <div>
                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1" >Investment Category</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1">No of Unit</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1">Duration</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2">
                    <label for="exampleFormControlInput1">Amount</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div
                     className="modalForm p-2">
                    <label for="exampleFormControlInput1">Payment Method</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>

                    <div className="modalForm p-2 d-flex justify-content-between" style={{width:'100%'}}>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                  <label className="switched">
                    <input type="checkbox" unchecked/>
                    <span className="slider round"></span>
                  </label>
                    </div>
                </div>
              
        </Modal.Body>
      </Modal>

        </div>
    )
}


export default FarmList;