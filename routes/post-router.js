const express = require('express')
const PostCtrl = require('../controllers/post-ctrl')

const router = express.Router()

router.post('/blog', PostCtrl.createPost)

module.exports = router