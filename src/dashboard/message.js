import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { setMessages } from "../redux/actions";
import "./navbar/navStyle.css";

class Message extends PureComponent {
  componentDidMount() {
    const { setMessages, token } = this.props;
    setMessages({ token });
  }

  render() {
    return (
      <div className="col-md-12" style={{ height: "100%" }}>
        <div className="col-md-12">
          <h4 style={{ color: "#191D38" }}>Messages</h4>
          {/* <button type="button" className="cusBut">Fund wallet</button> */}
        </div>

        <div className="messageList mt-4 p-4">
          <div className="col-md-12">
            <div className="col-md-12 col-sm-12 messageBut">
              <p className="text-center">Monday - 18 | 01 | 20</p>
            </div>
          </div>
          <ul style={{ padding: 15 }}>
            <li>
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
            </li>
            <li>
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
            </li>
            <li>
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
            </li>
          </ul>
          <hr></hr>
          <div className="col-md-12">
            <div className="col-md-12 col-sm-12 messageBut">
              <p className="text-center">Monday - 17 | 01 | 20</p>
            </div>
          </div>
          <ul>
            <li>
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
            </li>
            <li>
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
            </li>
            <li>
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    token: state?.auth?.token,
  };
};

export default connect(mapState, { setMessages })(Message);
