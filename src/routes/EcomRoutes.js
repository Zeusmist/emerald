import React from 'react';
import {Route} from 'react-router-dom';
import Farm from '../ecommerce/Farm';
import SliderPage from '../ecommerce/sliderPage';




const EcomRoutes = ()=>{
    return(
        <>
            <Route path="/farm" component={Farm}/>
            <Route path="/sliderpage" component={SliderPage}/>
        </>
    )
}



export default EcomRoutes;