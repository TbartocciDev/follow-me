const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const Post = require('../../models/post');

module.exports = {
  create,
  index,
  getOne,
};

async function create(req, res) {
  try {
    // Add map to the db
    const post = await Post.create(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req,res) {
  const posts = await Post.find({}).exec();
  res.json(posts);
}

async function getOne(req,res) {
  const post = await Post.findById(req.params.id);
  res.json(post);
}

async function getUserMaps(req,res) {
  const posts = await Post.find({user: req.user}).exec();
  res.json(posts);
}