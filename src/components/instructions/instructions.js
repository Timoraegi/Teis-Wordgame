import React from "react";
import "./instructions.css";

const Instructions = () => {
  return (
    <div className="container">
      <section className="gameInstructions">
        <div className="close-icon">
          <game-icon icon="close"></game-icon>
        </div>
        <div className="instructions">
          <p>
            Guess the <strong>WORD</strong> in six tries.
          </p>
          <p>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
        </div>

        <hr />

        <div className="examples">
          <p>
            <strong>Examples</strong>
          </p>

          <div className="example">
            <div className="row">
              <div className="correct">S</div>
              <div className="keyboard-button">A</div>
              <div className="keyboard-button">T</div>
              <div className="keyboard-button">I</div>
              <div className="keyboard-button">V</div>
            </div>
            <p>
              The letter <strong>S</strong> is in the word and in the correct spot.
            </p>
          </div>

          <div className="example">
            <div className="row">
              <div className="keyboard-button">I</div>
              <div className="present">N</div>
              <div className="keyboard-button">D</div>
              <div className="keyboard-button">I</div>
              <div className="keyboard-button">C</div>
            </div>
            <p>
              The letter <strong>N</strong> is in the word but in the wrong spot.
            </p>
          </div>

          <div className="example">
            <div className="row">
              <div className="keyboard-button">M</div>
              <div className="keyboard-button">I</div>
              <div className="keyboard-button">N</div>
              <div className="absent">A</div>
              <div className="keyboard-button">T</div>
            </div>
            <p>
              The letter <strong>A</strong> is not in the word in any spot.
            </p>
          </div>

          <hr />

          <p>
            <strong>
              You can play as many WORD GAMEs as you like! Click anywhere to start.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
