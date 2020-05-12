const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel/userModel');
const errorFormator = require('../../utilis/errorFormator');
const Authenticate = require('../../middleware/AuthenticateAdmin');

// @route get api/user
// @desc get All User
// @access privet
router.get('/user', Authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.admin.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route post api/user/register
// @desc Register user
// @access Public
router.post('/admin/register',

  // chech data

  [check('fastName', 'first Name is require')
    .not()
    .isEmpty(),
  check('lastName', 'last Name is require')
    .not()
    .isEmpty(),

  check('email', 'please include valid email')
    .isEmail(),
  check('address1', 'address1 is require')
    .not()
    .isEmpty(),
  check('address2', 'address2 is require')
    .not()
    .isEmpty(),
  check('country', 'country is require')
    .not()
    .isEmpty(),
  check('zipCode', 'zip is require')
    .not()
    .isEmpty(),

  check('password', 'please enter a password with 6 or more characters').isLength({ min: 6 }),

  ],

  (req, res) => {
    const errors = validationResult(req).formatWith(errorFormator);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.mapped(),
      });
    }

    const {
      fastName, lastName, email, address1, address2, country, zipCode, password,
    } = req.body;

    User.findOne({ email })
      .then((admin) => {
        if (admin) {
          return res.status(500).json({ msg: 'User already exists' });
        }

        // password bcrypt

        bcrypt.hash(password, 11, (err, hash) => {
          if (err) {
            return res.status(500).send('Server Error ');
          }

          const newUser = new User({
            fastName,
            lastName,
            email,
            address1,
            address2,
            country,
            zipCode,
            password: hash,
          });
          newUser.save()
            .then(() => {
              res.status(201).json({
                msg: 'User Created Successfully',
              });
            })
            .catch(() => {
              res.status(500).send('server Error');
            });
          return 0;
        });
        return 0;
      })
      .catch(() => {
        res.status(500).send('server Error');
      });
    return 0;
  });

// @route post api/user/login
// @desc Authentication & get token
// @access Public

router.post('/user/login',
  [
    check('email', 'please include valid email').isEmail(),

    check('password', 'password is requerd').exists(),
  ],

  (req, res) => {
    const errors = validationResult(req).formatWith(errorFormator);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.mapped(),
      });
    }
    const { email, password } = req.body;

    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ msg: 'User not found' });
        }

        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.status(500).json({
              msg: 'server error compare',
            });
          }

          if (!result) {
            return res.status(400).json({
              msg: 'password doesnot match',
            });
          }
          //  create token
          const token = jwt.sign({
            _id: user._id,
            fastName: user.fastName,
            lastName: user.LastName,
            email: user.email,

          }, 'SECRET', { expiresIn: '24h' });

          res.status(200).json({
            msg: 'login succesfull',
            token: `Bearer ${token}`,
          });
          return 0;
        });
        return 0;
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: 'server error ' });
      });
    return 0;
  });

module.exports = router;
