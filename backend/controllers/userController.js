const User = require('../models/User');
const PointsHistory = require('../models/PointsHistory');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    const usersWithRank = users.map((user, index) => ({
      ...user.toObject(),
      rank: index + 1
    }));
    res.json(usersWithRank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.claimPoints = async (req, res) => {
  try {
    const userId = req.params.userId;
    const randomPoints = Math.floor(Math.random() * 10) + 1;
    
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalPoints: randomPoints } },
      { new: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const history = new PointsHistory({
      userId: user._id,
      points: randomPoints
    });
    await history.save();
    
    res.json({ points: randomPoints, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};