import words from "../words.json";
const initialState = {
  word: "MINCE",
  word1: "DREAM",
  word2: "RADIO",
  word3: "TABLE",
  word4: "SMACK",
  word5: "VOICE",
  word6: "",
  current: 6, // User is now on the 6th and final row
  alert: false,
  pass: false,
  tryAgain: false,
  gameOver: false,
  letterColors: {
    Q: null,
    W: null,
    E: null,
    R: null,
    T: null,
    Y: null,
    U: null,
    I: null,
    O: null,
    P: null,
    A: null,
    S: null,
    D: null,
    F: null,
    G: null,
    H: null,
    J: null,
    K: null,
    L: null,
    Z: null,
    X: null,
    C: null,
    V: null,
    B: null,
    N: null,
    M: null,
  },
};


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WORD":
      return {
        ...state,
        word: "MINCE",
      };

    case "EDIT_WORD":
      if (!state.pass) {
        let pos = "word" + state.current;
        if (action.letter == "DEL") {
          return {
            ...state,
            [pos]: state[pos].slice(0, -1),
          };
        }
        if (state[pos].length != 5) {
          let newword = state[pos] + action.letter;
          return {
            ...state,
            [pos]: newword,
          };
        }
      }
      return {
        ...state,
      };

    case "CHECK_WORD":
      let keyyy = "word" + state.current;
      keyyy = state[keyyy].toLowerCase();
      if (words[0]["words"].includes(keyyy)) {
        if ((keyyy.length == 5) & (keyyy == state.word.toLowerCase())) {
          return {
            ...state,
            pass: true,
            gameOver: true,
            current: state.current + 1,
          };
        } else if (keyyy.length == 5) {
          if (state.current == 6) {
            return {
              ...state,
              gameOver: true,
              current: state.current + 1,
            };
          }
          return {
            ...state,
            pass: false,
            current: state.current + 1,
          };
        }
      } else {
        return {
          ...state,
          alert: true,
        };
      }

      return {
        ...state,
        alert: true,
      };

    case "SET_KEYCOLOR":
      const key = action.key;
      return {
        ...state,
        letterColors: {
          ...state.letterColors,
          [key]: action.color,
        },
      };

    case "CLEAR_ALERT":
      return {
        ...state,
        alert: false,
      };

    case "REFRESH":
      return {
        ...initialState,
        tryAgain: !state.tryAgain,
      };

    default:
      return { ...state };
  }
};

export default Reducer;
