import { CHANGE_COUNT } from "./actionTypes";

export const doCount = (payload) => ({
  type: CHANGE_COUNT,
  payload,
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    amount = amount + 1;
    dispatch(doCount(amount));
  }, 2000);
};
export const decrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    amount = amount - 1;
    dispatch(doCount(amount));
  }, 2000);
};
