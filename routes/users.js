const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

const multer = require('multer')
const upload = multer({ dest: 'temp/' })

router.get('/:id/followings', userController.getFollowings)
router.get('/:id/followers', userController.getFollowers)

// -----------------------------------------------------------------------------------

router.get('/:id', userController.getUser)
router.put('/:id', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), userController.putUser)

// -----------------------------------------------------------------------------------

module.exports = router