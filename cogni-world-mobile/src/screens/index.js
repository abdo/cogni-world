// // Tab screens

// User Tab Screens
import Canteen from './tabScreens/user/Canteen';
import Me from './tabScreens/user/Me';

// Admin Tab Screens
import Admin from './tabScreens/admin/Admin';

// // Other screens
import Registration from './common/Registration/Main';
import Signin from './common/Registration/Signin';
import Signup from './common/Registration/Signup';
import WaitForValidation from './common/Registration/WaitForValidation';

const screens = {
  UserScreens: { Canteen, Me },
  AdminScreens: { Admin },
  Registration,
  Signin,
  Signup,
  WaitForValidation,
};

export default screens;
