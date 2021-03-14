import React from 'react';

const InvestmentHistory = ()=>{
    return(
        <>
        <div className="col-md-12">
        <h4 style={{ color: "#191D38" }}>Investment History</h4>
      </div>
        <div className="transaData mt-4">
        <div class="table-responsive"></div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Price PerUnit</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope='col'>Available Units</th>
      <th scope="col">Interest%</th>
      <th scope='col'>Maturity Date</th>
      <th scope='col'>Status</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Yam Farm</td>
      <td>N65, 000</td>
      <td>Oct, 12 2020</td>
      <td>Jan, 2 2021</td>
      <td>500</td>
      <td>16</td>
      <td>6 months</td>
      <td>Verified</td>
      <td><button className='moreBut'>More</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Yam Farm</td>
      <td>N65, 000</td>
      <td>Oct, 12 2020</td>
      <td>Jan, 2 2021</td>
      <td>500</td>
      <td>16</td>
      <td>6 months</td>
      <td>Verified</td>
      <td><button className='moreBut'>More</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Yam Farm</td>
      <td>N65, 000</td>
      <td>Oct, 12 2020</td>
      <td>Jan, 2 2021</td>
      <td>500</td>
      <td>16</td>
      <td>6 months</td>
      <td>Verified</td>
      <td><button className='moreBut'>More</button></td>
    </tr>
  </tbody>
</table>
</div>
        </>
    )
}


export default InvestmentHistory;