import React from "react";
import "./card.css"
import {Forward} from "../svg"
import {Link} from "react-router-dom"
export default function ListCard({value}){
    return(
        <Link to={value.path}>
        <div className="cardRoot row">
            <div className="col-4 svgCont">
                {value.icon}
            </div>
            <div className="col-6 cardInfo">
                <div className="CardTitle">{value.title || "User Profile"}</div>
                <div className="subText">{value.subText}</div>
            </div>
            <div className="arrowCont col">
            <Forward />
            </div>
        </div>
        </Link>
    )
}