import React from "react";
import "./styles/subscription.css"


export default function SubscriptionForm(){
    return(
        <div className="subscribe-form">
        <form action="#">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
        </form>
    </div>
    )
}