import React from "react";
import { Banner, ListCard } from "./cards";
import { Shovel, Sun, Biometrics, Farmer, Grain, Egg } from "./svg";
import "./styles/index.css";
import RoutesNew from '../../routes/UserAccountRoutes';


export default function Account() {
  const items = [
    {
      title: "User profile",
      subText: "Edit Personal Information",
      icon: <Farmer />,
      path: "/user/profile",
    },
    {
      title: "Payment methods",
      icon: <Grain />,
      path: "/user/payment-methods",
    },
    {
      title: "Bank details",
      icon: <Egg />,
      path: "/user/bank-details",
    },
    {
      title: "Change password",
      icon: <Shovel />,
      path: "/user/change-password",
    },
    {
      title: "Enable Biometrics",
      icon: <Biometrics />,
      path: "/user/biometrics",
    },
    {
      title: "Investment History",
      icon: <Sun />,
      path: "/user/investment-history",
    },
  ];
  return (
    <div>
      <Banner />
      <div style={{display:'flex', flexDirection:'row'}}>
      <div className="cardListing">
        {items.map((value, index) => (
          <ListCard value={value} key={index} />
        ))}
       
      </div>
      <div style={{width: '40%', paddingLeft: 60}}>
      <RoutesNew/>
      </div>
      </div>
     
      
    </div>
  );
}
