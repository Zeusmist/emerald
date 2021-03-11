import React from 'react';

const Admins = ()=>{
    return(
        <>
        <div className="col-md-12">
        <h4 style={{ color: "#191D38" }}>Admins</h4>
        <button type="button" className="cusBut">Add new Admin</button>
      </div>
        <div className="transaData mt-4">
        <div class="table-responsive"></div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Anchorit International</td>
      <td>Anchorit@International.com</td>
      <td>Super Admin</td>
      <td><button className='actionBut'>Action</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Anchorit International</td>
      <td>Anchorit@International.com</td>
      <td>Super Admin</td>
      <td><button className='actionBut'>Action</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Anchorit International</td>
      <td>Anchorit@International.com</td>
      <td>Super Admin</td>
      <td><button className='actionBut'>Action</button></td>
    </tr>
  </tbody>
</table>
</div>
        </>
    )
}


export default Admins