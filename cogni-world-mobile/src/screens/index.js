// // Tab screens

// User Tab Screens
import Test3 from './tabScreens/user/test3';
import Test4 from './tabScreens/user/test4';

// Admin Tab Screens
import Test1 from './tabScreens/admin/test1';
import Test2 from './tabScreens/admin/test2';

// // Other screens
import Registration from './common/Registration/Main';
import Signin from './common/Registration/Signin';
import Signup from './common/Registration/Signup';
import WaitForValidation from './common/Registration/WaitForValidation';

const screens = {
  UserScreens: { Test3, Test4 },
  AdminScreens: { Test1, Test2 },
  Registration,
  Signin,
  Signup,
  WaitForValidation,
};

export default screens;
