import React from 'react';

const AdminUsers = ()=>{
    return(
        <>
        <div className="col-md-12">
        <h4 style={{ color: "#191D38" }}>Users</h4>
        <button type="button" className="cusBut">Add new user</button>
      </div>
        <div className="transaData mt-4">
        <div class="table-responsive"></div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Date Created</th>
      <th scope='col'>Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th><div style={{width: 40, height:40, borderRadius: 100, backgroundColor:'red'}}></div></th>
      <td>Anchorit International</td>
      <td>Anchorit@International.com</td>
      <td>Jan, 2 2021,  08:02am</td>
      <td>Verified</td>
      <td><button className='moreBut'>More</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <th><div style={{width: 40, height:40, borderRadius: 100, backgroundColor:'red'}}></div></th>
      <td>Anchorit International</td>
      <td>Anchorit@International.com</td>
      <td>Jan, 2 2021,  08:02am</td>
      <td>Verified</td>
      <td><button className='moreBut'>More</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <th><div style={{width: 40, height:40, borderRadius: 100, backgroundColor:'red'}}></div></th>
      <td>Anchorit International</td>
      <td>Anchorit@International.com</td>
      <td>Jan, 2 2021,  08:02am</td>
      <td>Verified</td>
      <td><button className='moreBut'>More</button></td>
    </tr>
  </tbody>
</table>
</div>
        </>
    )
}


export default AdminUsers;