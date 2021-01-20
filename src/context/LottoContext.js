import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  LottoBox: [
    {
      index: 1,
      num: "?",
    },
    {
      index: 2,
      num: "?",
    },
    {
      index: 3,
      num: "?",
    },
    {
      index: 4,
      num: "?",
    },
    {
      index: 5,
      num: "?",
    },
    {
      index: 6,
      num: "?",
    },
    {
      index: 7,
      num: "+",
    },
    {
      index: 8,
      num: "?",
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case "DROW":
      return {
        ...state,
        num: state.LottoBox.map((box) => {
          box.index !== 7
            ? (box.num = Math.floor(Math.random() * 45))
            : (box.num = "+");
        }),
      };
    default:
      return;
  }
}

const LottoState = createContext();
const LottoDispatch = createContext();

export function LottoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LottoState.Provider value={state}>
      <LottoDispatch.Provider value={dispatch}>
        {children}
      </LottoDispatch.Provider>
    </LottoState.Provider>
  );
}

export function useStateLotto() {
  return useContext(LottoState);
}

export function useDispatchLotto() {
  return useContext(LottoDispatch);
}
