import http, { userAPI } from '../../assets/utils/httpService';

const checkUserHasRegistered = (email, callback) => {
  http.get(`${userAPI}/isRegistered/${email}`).then(res => {
    callback(res.data.isRegistered);
  });
};

export default checkUserHasRegistered;
