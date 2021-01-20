import React from "react";
import Item from "./LottoItem";
import Button from "./Button";
import { useStateLotto, useDispatchLotto } from "../context/LottoContext";
import "./lotto.css";

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
      state.LottoBox.map((item) => item.num)
    );
  };

  return (
    <div>
      <div className="lottoBox">
        {state.LottoBox.map((box) => (
          <Item key={box.index} number={box.num} />
        ))}
      </div>
      <div>
        <Button handleLotto={handleLotto} />
      </div>
    </div>
  );
}

export default LottoArray;
