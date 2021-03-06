export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          {
            id: Math.random(),
            text: action.payload.text,
            amount: parseFloat(action.payload.amount),
          },
          ...state.transactions,
        ],
      };
    default:
      return state;
  }
};
