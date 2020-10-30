const {test, create,readBall,home,categora,tarte,apple,} = require('../controllers/movie-controller');
const {readAll, createuser,deleteuser, findAndLog,AddCategory,inscription,sub} = require('../controllers/user-controller');
const express=require('express');
const { route } = require('../app');
const router=express.Router();


router.route('/')
.get(home)
.post(findAndLog)
router.route('/all')
    .get(categora)
router.route('/tarte')
    .get(tarte)
router.route('/inscription')
    .get(inscription)
    .post(createuser)
router.route('/applepie')
.get(apple)
router.route('/delete')
.get(deleteuser)
    module.exports=router;