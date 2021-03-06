import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });

  const total = amounts
    .reduce((acc, item) => {
      return (acc += item);
    }, 0)
    .toFixed(2);

  const sign = total < 0 ? "-" : "";

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {sign}${Math.abs(total)}
      </h1>
    </div>
  );
}
