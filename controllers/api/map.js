const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const Map = require('../../models/map');

module.exports = {
  create,
  index,
  getOne,
  getUserMaps
};

async function create(req, res) {
  try {
    // Add map to the db
    const map = await Map.create(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req,res) {
  const maps = await Map.find({}).exec();
  res.json(maps);
}

async function getOne(req,res) {
  const map = await Map.findById(req.params.id);
  res.json(map);
}

async function getUserMaps(req,res) {
  const maps = await Map.find({user: req.user}).exec();
  console.log(maps)
  res.json(maps);
}