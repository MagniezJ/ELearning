const express = require('express');
const app = express();
const UsersRoutes = require('./routes/index')
/* const CoursesRoutes = require('./routes/Courses_routes') */
const bodyParser = require('body-parser')

app.set('view engine','ejs');
app.use(bodyParser.json())
app.use(express.static('../Client'));
app.use('/',UsersRoutes)/* 

app.use('/courses',CoursesRoutes) */
app.set("json spaces",2)

module.exports = app;