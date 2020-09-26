import {getDispatch} from '../../reduxStore';

const getHome = () => {
  getDispatch()({
    type: 'HOME_ACTION',
  });
};
export default {
  getHome,
};
