const {test, create,readBall,home,categora,tarte,apple,} = require('../controllers/movie-controller');
const {readAll, createuser,deleteuser, findAndLog,AddCategory,inscription,sub} = require('../controllers/user-controller');
const express=require('express');
const { route } = require('../app');
const router=express.Router();


router.route('/')
.get(home)
router.route('/all')
    .get(categora)
router.route('/tarte')
    .get(tarte)
    router.route('/inscription')
    .get(inscription)
    .post(createuser)
router.route('/applepie')
.get(apple)
router.route("/cat")
    .get(test)
    .post(create)
router.route("/user/cat/add")
    .post(AddCategory)
router.route("/cat/all")
    .get(readBall)

router.route("/user")
    .get(readAll)
    .post(createuser)

router.route("/user/delete")
    .get(deleteuser)

router.route("/user/login")
    .post(findAndLog)
    module.exports=router;