import React, { useState } from "react";
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
              <div style={{ backgroundColor: "#6aaa64" }}>S</div>
              <div>A</div>
              <div>T</div>
              <div>I</div>
              <div>V</div>
            </div>
            <p>
              The letter <strong>S</strong> is in the word and in the correct
              spot.
            </p>
          </div>

          <div className="example">
            <div className="row">
              <div>I</div>
              <div style={{ backgroundColor: "#c9b458" }}>N</div>
              <div>D</div>
              <div>I</div>
              <div>C</div>
            </div>
            <p>
              The letter <strong>N</strong> is in the word but in the wrong
              spot.
            </p>
          </div>

          <div className="example">
            <div className="row">
              <div>M</div>
              <div>I</div>
              <div>N</div>
              <div style={{ backgroundColor: "#787c7e" }}>A</div>
              <div>T</div>
            </div>
            <p>
              The letter <strong>A</strong> is not in the word in any spot.
            </p>
          </div>

          <hr></hr>

          <p>
            <strong>
              You can play as many WORD GAME as you like! <strong></strong>
              Click anywhere to start.
            </strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Instructions;
