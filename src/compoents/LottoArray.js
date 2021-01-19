import React from "react";
import Item from "./LottoItem";
import Button from "./Button";
import "./lotto.css";

const lotArr = [
  {
    num: "?",
  },
  {
    num: "?",
  },
  {
    num: "?",
  },
  {
    num: "?",
  },
  {
    num: "?",
  },
  {
    num: "?",
	},
	{
    num: "+",
  },
  {
    num: "?",
  },
];

function LottoArray() {
  return (
    <>
      <div className="lottoBox">
        {lotArr.map((Arr) => (
					<Item number={Arr.num} />
        ))}
      </div>
      <div>
        <Button />
      </div>
    </>
  );
}

export default LottoArray;
