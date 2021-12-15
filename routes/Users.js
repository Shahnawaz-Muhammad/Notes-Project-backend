const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send({ message: err });
  }
});

router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  try {
    const savedUser = await user.save();
    return res.send(savedUser);
  } catch (err) {
    res.send({ message: err });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.send(user);
  } catch (err) {
    res.send({ message: err });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const removeUser = await User.remove({ _id: req.params.userId });
    res.send(removeUser);
  } catch (err) {
    res.send({ message: err });
  }
});

router.patch('/:userId', async (req, res) => {
  try {
    const updateUser = await User.updateMany(
      { _id: req.params.userId },
      { $set: { firstName: req.body.firstName, lastName: req.body.lastName } }
    );
    res.send(updateUser);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
