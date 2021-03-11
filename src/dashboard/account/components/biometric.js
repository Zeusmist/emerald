/*eslint-disable*/
import React from "react";
import { ReactComponent as BackArrow } from "../svg/backArrow.svg";
import { ReactComponent as FaceID } from "../svg/faceid.svg";
import { ReactComponent as Finger } from "../svg/finger.svg";
import Button from "../../../components/Button";
import Switch from "../../../components/Switch";
import Input from "../../../components/Input";

import "../styles/index.css";

const Biometric = () => {
  return (
    <div className="dashboard__holder">
      <BackArrow />
      <>
        <div className="dashboard__password--title">Enable Biometrics</div>
        <div className="dashboard__password--sub">
          Select and configure your biometrics
        </div>
      </>
      <div className="dashboard__bio--options__holder">
        <div className="dashboard__bio--options__item">
          <div className="left">
            <FaceID />
            <span>
              Face ID <span className="tint"> enabled </span>
            </span>
          </div>
          <div className="right">
            <Switch />
          </div>
        </div>

        <div className="dashboard__bio--options__item">
          <div className="left">
            <Finger />
            <span>
              Touch ID <span className={`tint alt`}> Not found </span>
            </span>
          </div>
          <div className="right">
            <Switch />
          </div>
        </div>

        <div className="dashboard__bio--options__item">
          <div className="pin">****</div>
          <div className="set">Set Pin</div>
        </div>
      </div>

      <div className="dashboard__password--button">
        <Button text="Done" main="#0E4944" sub="#fff" />
      </div>
    </div>
  );
};

export default Biometric;
