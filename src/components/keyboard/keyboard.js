import React from "react";
import "./keyboard.css";
import { connect } from "react-redux";

class Keyboard extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 8) {
        this.props.onedit("DEL");
      } else if (event.keyCode === 13) {
        this.props.oncheck();
      } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        this.props.onedit(event.key.toUpperCase());
      }
    });
  }

  onEdit = (event) => {
    if (event.target.dataset.check) {
      this.props.oncheck();
    }
    if (event.target.dataset.value) {
      this.props.onedit(event.target.dataset.value);
    }
  };

  renderKey = (key) => {
    const colorClass = this.props.letterColors[key]?.toLowerCase() || "";
    return (
      <button
        key={key}
        className={colorClass}
        data-value={key}
      >
        {key}
      </button>
    );
  };

  render() {
    return (
      <section className="keyboard">
        <div className="key-row row-one" onClick={this.onEdit}>
          {"QWERTYUIOP".split("").map(this.renderKey)}
        </div>
        <div className="key-row row-two" onClick={this.onEdit}>
          {"ASDFGHJKL".split("").map(this.renderKey)}
        </div>
        <div className="key-row row-three" onClick={this.onEdit}>
          <button data-check="\n">ENTER</button>
          {"ZXCVBNM".split("").map(this.renderKey)}
          <button data-value="DEL">DEL</button>
        </div>
      </section>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    letterColors: state.letterColors,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onedit: (letter) => dispatch({ type: "EDIT_WORD", letter: letter }),
    oncheck: () => dispatch({ type: "CHECK_WORD" }),
    onset: () => dispatch({ type: "SET_WORD" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Keyboard);
