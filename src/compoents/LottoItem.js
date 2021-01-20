import React from "react";

function LottoItem({ number, index }) {
  return (
    <div className="ball" key={index}>
      {number}
    </div>
  );
}

export default LottoItem;
