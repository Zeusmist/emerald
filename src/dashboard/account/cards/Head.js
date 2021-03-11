import React from "react";
import "./head.css";

export default function Banner({name}){
return(
    <div className="headRoot">
        <div className="headMainTxt">My Account</div>
        <div className="headUsername">{name || "Ogundairo Taiwo"}</div>
    </div>
)
}