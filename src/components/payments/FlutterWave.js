import axios from "axios";
import React, { PureComponent, useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const FlutterWave = ({ id, amount, email, name, title, description }) => {
  const config = {
    public_key: "FLWPUBK-8c04b67e97ed4e979764a9661e4ba588-X",
    tx_ref: Date.now() + id,
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    // redirect_url: `${window.location.origin}/dashboard`,
    customer: {
      email,
      phonenumber: "07064586146",
      name,
    },
    customizations: {
      title,
      description,
      // logo:
    },
  };
  console.log({ config });
  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  }, []);
  return null;
};
const mapState = (state) => {
  return {
    email: state?.auth?.email,
    name: state?.auth?.firstName + " " + state?.auth?.lastName,
    id: state?.auth?.id,
  };
};

export default connect(mapState)(FlutterWave);
