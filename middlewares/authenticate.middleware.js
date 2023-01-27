// Gérer l'authentification avec passport.js, admin, user, super admin......

exports.isAuthenticated = (req, res, next) => {
  if (true) {
    // not authenticated, or authenticated incorrect
    err = new Error("Unauthorized ");
    err.status = 401;
    next(err);
  } else {
    next();
  }
};

exports.isUser = (req, res, next) => {
  if (true) {
    // not authenticated, or authenticated incorrect
    err = new Error("Not ");
    err.status = 401;
    next(err);
  } else {
    next();
  }
};

exports.isAdmin = (req, res, next) => {
  if (true) {
    // not authenticated, or authenticated incorrect
    err = new Error("Not ");
    err.status = 401;
    next(err);
  } else {
    next();
  }
};
