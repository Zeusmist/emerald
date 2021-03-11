import React from 'react';
import { Cow, Add } from './svgs';


const SliderPage = ()=>{
    return(
        <>
        <div className='sliderDiv'>This is a Slide show of Latest Products</div>
        <p className='text-center'>Latest Details</p>
        <div className='row m-0'>
        <div className='col-md-4 col-sm-12 d-flex justify-content-center align-item-center'>
            <div className='colDiv'>
                <div className="newsCircle">
                    <Cow/>          
                </div>
                <small className='smallDivText'>
                Cattle Farm
                </small>
                <small className='smallDivPrice'>
                ₦120,000.00
                </small>
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <small className='priceDiv'>700 / 1000 Unit(s)</small>
                   <Add/>
                </div>
            </div>
        </div>
        <div className='col-md-4 col-sm-12 d-flex justify-content-center align-item-center'>
        <div className='colDiv'>
            <div className="newsCircle">
                    <Cow/>          
            </div>
            <small className='smallDivText'>
                Cattle Farm
                </small>
                <small className='smallDivPrice'>
                ₦120,000.00
                </small>
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <small className='priceDiv'>700 / 1000 Unit(s)</small>
                   <Add/>
                </div>
        </div>
        </div>
        <div className='col-md-4 col-sm-12 d-flex justify-content-center align-item-center'>
        <div className='colDiv'>
            <div className="newsCircle">
                    <Cow/>          
            </div>
            <small className='smallDivText'>
                Cattle Farm
                </small>
                <small className='smallDivPrice'>
                ₦120,000.00
                </small>
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <small className='priceDiv'>700 / 1000 Unit(s)</small>
                   <Add/>
                </div>
        </div>
        </div>
        </div>
        <div className='row m-0 mt-3'>
        <div className='col-md-4 col-sm-12 d-flex justify-content-center align-item-center'>
        <div className='colDiv'>
            <div className="newsCircle">
                    <Cow/>          
            </div>
            <small className='smallDivText'>
                Cattle Farm
                </small>
                <small className='smallDivPrice'>
                ₦120,000.00
                </small>
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <small className='priceDiv'>700 / 1000 Unit(s)</small>
                   <Add/>
                </div>
        </div>
        </div>
        <div className='col-md-4 col-sm-12 d-flex justify-content-center align-item-center'>
        <div className='colDiv'>
            <div className="newsCircle">
                    <Cow/>          
            </div>
            <small className='smallDivText'>
                Cattle Farm
                </small>
                <small className='smallDivPrice'>
                ₦120,000.00
                </small>
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <small className='priceDiv'>700 / 1000 Unit(s)</small>
                   <Add/>
                </div>
        </div>
        </div>
        <div className='col-md-4 col-sm-12 d-flex justify-content-center align-item-center'>
        <div className='colDiv'>
            <div className="newsCircle">
                    <Cow/>          
            </div>
            <small className='smallDivText'>
                Cattle Farm
                </small>
                <small className='smallDivPrice'>
                ₦120,000.00
                </small>
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <small className='priceDiv'>700 / 1000 Unit(s)</small>
                   <Add/>
                </div>
        </div>
        </div>
        </div>
        </>
    )
}


export default SliderPage;