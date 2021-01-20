import { findAllByDisplayValue } from "@testing-library/react";
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

function ranNum() {
  const arr = [];
  const beforesort = [];
  let i = 0;
  while(i < 8){
    let num = Math.floor(Math.random() * 45 + 1);
    if(!check(num)){
      arr.push(num);
      i++;
    }
  }
  function check(Num){
    for(let x=0; x<arr.length; x++){
      if(arr[x] === Num){
        return true;
      }
    }
    return false;
  }
  for(let z=0; z<arr.length-2; z++){
    beforesort[z] = arr[z];
  }
  beforesort.sort(function(a,b){
    return a-b;
  })
  for(let z=0; z<arr.length-2; z++){
    arr[z] = beforesort[z]
  }
  return arr;
}

export function reducer(state, action) {
  switch (action.type) {
    case "DROW":
      const ManufactureArr = ranNum();
      return {
        ...state,
        num: state.LottoBox.map((box) => {
          box.index !== 7
            ? (box.num = ManufactureArr[box.index-1])
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
