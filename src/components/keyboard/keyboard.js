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

  getKeyClass = (letter) => {
    const color = this.props.letterColors[letter];
    if (!color) return "";
    return color.toLowerCase(); // e.g. "correct", "present", "absent"
  };

  render() {
    return (
      <section className="keyboard">
        <div className="key-row row-one" onClick={this.onEdit}>
          {"QWERTYUIOP".split("").map((letter) => (
            <button
              key={letter}
              data-value={letter}
              className={this.getKeyClass(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="key-row row-two" onClick={this.onEdit}>
          {"ASDFGHJKL".split("").map((letter) => (
            <button
              key={letter}
              data-value={letter}
              className={this.getKeyClass(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="key-row row-three" onClick={this.onEdit}>
          <button data-check="\n">ENTER</button>
          {"ZXCVBNM".split("").map((letter) => (
            <button
              key={letter}
              data-value={letter}
              className={this.getKeyClass(letter)}
            >
              {letter}
            </button>
          ))}
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
