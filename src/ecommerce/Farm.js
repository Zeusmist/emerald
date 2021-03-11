import React from 'react'
import { Cow, Like, Star } from './svgs'


const Farm = ()=>{
    return(
        <>
        <div className='row m-0'>
            <div className='col-md-7 col-sm-12' style={{backgroundColor:'#EBFFF2'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                   <div className='p-2'>
                       <div className="squares"></div>
                       <div className="squares"></div>
                       <div className="squares"></div>
                       <div className="squares"></div>
                   </div>
                   <div className='p-3'>
                   <div className='cowDiv'>
                        <div className='cowCircle'>
                            <Cow/>
                        </div>
                    </div>
                   </div>
                    
                </div>
            </div>
            <div className='col-md-5 col-sm-12 pb-2' style={{backgroundColor:'#EBFFF2'}}>
                <small className='cattleFarm'>Cattle Farm</small><br/>
                <Like/><small className='cattleFarmLike'>Add to Favourites</small><br/>
                <small className='cattleFarmLike'>Nisl, do fames, consequat adipisicing. Recusandae platea <small className='cattleFarmLike'>neque, cum,</small> </small><br/>
                <small className='cattleFarmLike' style={{textDecorationLine:'underline'}}>Read More</small><br/>
                <small className='cattlePrice'>N25,000.00</small><br/>
                <button className="formBut1" style={{marginLeft: 10}}>ADD TO CART</button>
                <button className="formBut2" style={{marginLeft: 20}}>BUY NOW</button>
            </div>
        </div>

        <div className='mt-4 p-3' style={{backgroundColor:'#EBFFF2'}}>
            <small className='productDetails'>Product Details</small><br/>
            <small className='productContent'>Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel augue convallis anim dis quis et molestiae, eos aenean corrupti neque? Interdum, quisque  diam molestie porta iaculis earum? Non magni bibendum eum fugiat, fringilla donec! Facilis eligendi litora mattis similique laborum dictumst sapien cubilia aute. Etiam, architecto bibendum, est odit laboriosam. 
Tempora minim maiores voluptatum. Cillum? Posuere. Imperdiet adipisci, beatae reprehenderit bibendum optio reiciendis pellentesque inceptos, quos pulvinar pellentesque, elit sociis? Felis omnis est quis, officiis dolor accusamus fusce saepe veritatis, quo feugiat etiam lobortis laboris assumenda minus nullam molestie, proin.
</small>
        </div>

        <div className='mt-4 p-3'>
        <small className='productReview'>Reviews (15)</small><br/>
        <div style={{display:'flex', flexDirection:'row'}}>
            <div>
            <small className='bigFive'>5</small><small className='smallFive'>/5</small>
            </div>
            <div style={{marginTop: 30, marginLeft: 20}}>
            <small className='avgRating'>Average Rating</small><br/>
            <Star/><Star/><Star/><Star/><Star/>
            </div>
        </div>     
        </div>

        <div className='row m-0 p-2'>
           <div className='col-md-6 col-sm-12 p-2'>
           <div style={{backgroundColor:'#EBFFF2', width: '95%', padding: 30}}>
           <div style={{display:'flex', flexDirection:'row'}}>
            <div>
            <p>person</p>
            </div>
            <div style={{marginTop: 30, marginLeft: 20}}>
            <small className='profileName'>Olu Olu</small><br/>
            <Star/><Star/><Star/><Star/><Star/>
            </div>
        </div>
        <span style={{marginTop:20}}>
        <small className='personRemark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, velit in blandit iaculis, 
        odio orci laoreet urna, sed laoreet velit lacus porta nulla.</small>
        </span>
           </div>

           </div>


           <div className='col-md-6 col-sm-12 p-2'>
           <div style={{backgroundColor:'#EBFFF2', width: '95%', padding: 30}}>
           <div style={{display:'flex', flexDirection:'row'}}>
            <div>
            <p>person</p>
            </div>
            <div style={{marginTop: 30, marginLeft: 20}}>
            <small className='profileName'>Olu Olu</small><br/>
            <Star/><Star/><Star/><Star/><Star/>
            </div>
        </div>
        <span style={{marginTop:20}}>
        <small className='personRemark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, velit in blandit iaculis, 
        odio orci laoreet urna, sed laoreet velit lacus porta nulla.</small>
        </span>
           </div>
        
           </div>
        </div>
        </>
    )
}



export default Farm;