import React from "react";
import Item from "./LottoItem";
import Button from "./Button";
import { useStateLotto, useDispatchLotto } from "../context/LottoContext";
import "./lotto.css";
/* 
const lotArr = [
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
]; */

function LottoArray() {
  const state = useStateLotto();
  const dispatch = useDispatchLotto();

  const handleLotto = () => {
    console.log("handleLotto execute!");
    dispatch({
      type: "DROW",
    });
    console.log(
      "handleLtto in num = ",
      state.map((item) => item.num)
    );
  };

  return (
    <div>
      <div className="lottoBox">
        {state.map((box) => (
          <Item number={box.num} />
        ))}
      </div>
      <div>
        <Button handleLotto={handleLotto} />
      </div>
    </div>
  );
}

export default LottoArray;
