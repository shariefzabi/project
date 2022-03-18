const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Blog = require('./modal');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './blogs/images');
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('photo'), (req, res) => {
  const topic = req.body.topic;
  const date = req.body.date;
  const photo = req.file.filename;
  const about = req.body.about;
  const id = req.body.id;

  const newBlogData = {
    topic,
    date,
    photo,
    about,
    id,
  }

  const newBlog = new Blog(newBlogData);

  newBlog.save()
    .then(() => res.json('Blog Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').get(async (req, res) => {
  try {
    const data = await Blog.find({});
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
});
router.route('/:id').get(async (req, res) => {
  try {
    let { params } = req;
    const data = await Blog.find({ "id": params.id });
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
});
module.exports = router;