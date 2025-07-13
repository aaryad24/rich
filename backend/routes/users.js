const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  addUser,
  claimPoints
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.post('/', addUser);
router.post('/:userId/claim', claimPoints);

module.exports = router;