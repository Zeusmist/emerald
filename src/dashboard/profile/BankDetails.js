import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'react-bootstrap'
import {useHistory} from "react-router-dom"
import { connect } from "react-redux";
import {getCards} from '../../redux/actions'



const BankDetails = ({getCards, token, cards})=>{
  const history = useHistory();
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    console.log('CARDS:::::::::::::::',cards);

    useEffect(()=>{
       getCards(token)

    },[])
    return(
        <div style={{ height: "100%" }}>
        
        <div className="row col-md-12 d-flex justify-content-center">
        <button type="button" className="butGroup col-md-3 col-sm-3" onClick={()=> history.push("/profile")}>Profile</button>
        <button type="button" className="butGroup col-md-3 col-sm-3" onClick={()=> history.push("/nextofkin")}>Next of kin</button>
        <button type="button" className="butGroup col-md-3 col-sm-3">Bank Details</button>
        </div>

        <div className="col-md-12 d-flex justify-content-center mt-1">
        <div className="meProfile">

        </div>
        </div>
        <p className="col-md-12 text-center">Nnamdi Emeka<br/>
        <small className="col-md-12 d-flex justify-content-center">User@gmail.com</small>
        </p>
        {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <button className="bankInfo" onClick={handleShow}>Add Bank Details</button>
        </div> */}

        <div className="transaData mt-4">
            <div class="table-responsive">
            <table class="table">
                    
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Bank Name</th>
                <th scope="col">Account Name</th>
                <th scope="col">Account Number</th>
                <th scope="col">Account Info</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>GTBank</td>
                <td>Nnamdi</td>
                <td>0002221111</td>
                <td>account info</td>
                <td>Edit<br/>Delete</td>

                </tr>
                <tr>
                <td>2</td>
                <td>Access Bank</td>
                <td>Nnamdi</td>
                <td>0002221111</td>
                <td>account info</td>
                <td>Edit<br/>Delete</td>

                </tr>
                <tr>
                <td>3</td>
                <td>GTBank</td>
                <td>Nnamdi</td>
                <td>0002221111</td>
                <td>account info</td>
                <td>Edit<br/>Delete</td>

                </tr>
                <tr>
                <td>4</td>
                <td>Access Bank</td>
                <td>Nnamdi</td>
                <td>0002221111</td>
                <td>account info</td>
                <td>Edit<br/>Delete</td>

                </tr>
                <tr>
                <td>5</td>
                <td>GTBank</td>
                <td>Nnamdi</td>
                <td>0002221111</td>
                <td>account info</td>
                <td>Edit<br/>Delete</td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>






            {/* <Modal show={show} onHide={handleClose}>
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
      </Modal> */}
</div>
    )
}


const mapStateToProps = (state) => {
  return {
    token: state?.auth?.token,
    data: state?.user?.data,
    cards: state?.user?.cards
  };
};

export default connect(mapStateToProps, { getCards })(BankDetails);