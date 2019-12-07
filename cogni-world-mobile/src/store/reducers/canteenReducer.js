import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  canteenItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CANTEEN_ITEMS:
      return {
        ...state,
        canteenItems: action.payload,
      };

    default:
      return state;
  }
};
