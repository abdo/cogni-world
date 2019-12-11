import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  isCheckingUserAuthentication: true,
  currentUser: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
      };

    case actionTypes.UNSET_CURRENT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case actionTypes.START_CHECK_USER_AUTHENTICATION:
      return {
        ...state,
        isCheckingUserAuthentication: true,
      };

    case actionTypes.END_CHECK_USER_AUTHENTICATION:
      return {
        ...state,
        isCheckingUserAuthentication: false,
      };

    case actionTypes.PURCHASE_CANTEEN_ITEM:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          canteen: {
            canteenBalance:
              state.currentUser.canteen.canteenBalance - action.payload,
            itemsOrdered: state.currentUser.canteen.itemsOrdered + 1,
          },
        },
      };

    default:
      return state;
  }
};
