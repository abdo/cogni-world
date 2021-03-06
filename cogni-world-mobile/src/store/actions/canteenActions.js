import { startLoading, endLoading } from './helpers/setLoading';
import * as actionTypes from './actionTypes';
import catchErr from './helpers/catchErr';
import http, { canteenAPI } from '../../assets/utils/httpService';

export const getAllCanteenItems = callback => dispatch => {
  startLoading();
  http
    .get(`${canteenAPI}/all`)
    .then(res => {
      const canteenItems = res.data;
      dispatch({
        type: actionTypes.SET_CANTEEN_ITEMS,
        payload: canteenItems,
      });
      if (typeof callback === 'function') callback(canteenItems);
    })
    .catch(err => {
      catchErr(err);
    })
    .finally(() => {
      endLoading();
    });
};

export const purchaseCanteenItem = ({ _id: id, price }, callback) => (dispatch) => {
  startLoading();
  http
  .post(`${canteenAPI}/purchase/${id}`)
  .then(res => {
    const canteenItems = res.data;
    dispatch({
      type: actionTypes.PURCHASE_CANTEEN_ITEM,
      payload: price,
    });
    if (typeof callback === 'function') callback(canteenItems);
  })
  .catch(err => {
    catchErr(err);
  })
  .finally(() => {
    endLoading();
  });
};
