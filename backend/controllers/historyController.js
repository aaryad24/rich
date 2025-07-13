const PointsHistory = require('../models/PointsHistory');

exports.getHistory = async (req, res) => {
  try {
    const history = await PointsHistory.find().populate('userId', 'name');
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};