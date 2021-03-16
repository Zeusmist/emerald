import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Spinner from "../components/Spinner";
import { setMessages } from "../redux/actions";
import "./navbar/navStyle.css";

class Message extends PureComponent {
  state = {};

  componentDidMount() {
    const { messages, setMessages, token } = this.props;
    console.log("MESSAGES EMPTY", messages);
    if (messages.length == 0) {
      this.setState({ isFetchingMessages: true }, async () => {
        console.log("SETTING MESAGES");
        await setMessages({ token });
        this.setState({ isFetchingMessages: false });
      });
    }
  }

  render() {
    const { messages, dates } = this.props;
    const { isFetchingMessages } = this.state;
    return (
      <div className="col-md-12" style={{ height: "100%" }}>
        <div className="col-md-12">
          <h4 style={{ color: "#191D38" }}>Messages</h4>
          {/* <button type="button" className="cusBut">Fund wallet</button> */}
        </div>

        <div className="messageList mt-4 p-4">
          {isFetchingMessages ? (
            <Spinner size="lg" />
          ) : (
            <div>
              {messages.length == 0 && <div>No messages yet</div>}
              {dates.map((date, i) => (
                <div>
                  <div className="col-md-12">
                    <div className="col-md-12 col-sm-12 messageBut">
                      {/* <p className="text-center">Monday - 18 | 01 | 20</p> */}
                      <p className="text-center">{date}</p>
                    </div>
                  </div>
                  <ul style={{ padding: 15 }}>
                    {messages.map((message) => (
                      <li>{message}</li>
                    ))}
                  </ul>
                  <hr></hr>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    token: state?.auth?.token,
    // dates: ["Monday - 18 | 01 | 20"],
    // messages: [
    //   `1500s, when an unknown printer took a galley of type and scrambled
    // it to make a type specimen book. It has survived not only five
    // centuries, but also the leap into electronic`,
    // ],
    dates: [],
    messages: state?.messages,
  };
};

export default connect(mapState, { setMessages })(Message);
