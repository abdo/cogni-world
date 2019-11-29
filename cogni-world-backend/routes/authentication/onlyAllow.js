const onlyAllow = roles => {
  // roles can be: 'any', 'user', 'admin'
  let rolesArr;
  if (typeof roles === 'string') rolesArr = [roles];
  else rolesArr = roles;

  return (req, res, next) => {
    // In case of invalid function input
    if (!rolesArr || !rolesArr[0]) {
      return next();
    }

    if (rolesArr.includes('any')) {
      return next();
    }

    const user = req.user;
    if (!user) {
      return disAllow(req, res);
    } else if (rolesArr.includes('user')) {
      // A user
      return next();
    }

    const allow = rolesArr.some(role => user[`is${capitalize(role)}`]);
    console.log('ALLOW', allow);
    if (allow) {
      // Proceed to controller
      return next();
    } else {
      // User isn't allowed
      return disAllow(req, res);
    }
  };
};

const capitalize = word => word[0].toUpperCase() + word.slice(1, word.length);

const disAllow = (req, res) => {
  const message = 'You are not allowed to perform this operation';
  return res.status(401).json({ message });
};

module.exports = onlyAllow;
