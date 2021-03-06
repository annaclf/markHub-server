const bcrypt = require('bcrypt');

module.exports = {
  validateUserInputs: (req, res, next) => {
    if (req.session.currentUser) {
      return res.status(401).json({code: 'unauthorized'});
    }

    const { password, email } = req.body;

    if (!email || !password) {
      return res.status(422).json({code: 'validation'});
    } else {
      next();
    }
  },
  encryptPassword: (req, res, next) => {
  }
};