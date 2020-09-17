import {getDispatch} from '../../reduxStore';

const getHome = (params) => {
  getDispatch()({
    type: 'HOME_ACTION',
    payload: {
      params,
    },
  });
};
export default {
  getHome,
};
