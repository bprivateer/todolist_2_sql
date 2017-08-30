const express = require('express');
const models = require('../models/index');

const router = express.Router();

router.get('/', function(req, res){
  models.todolist.findAll()
    .then(function(data){
      console.log(data);
      res.render('index', {data: data});
    })
    .catch(function(err){
      console.log(err);
      res.redirect("/");
    })
})

router.post('/', function(req, res){
  let todos = models.todolist.create({
    title: req.body.title,
    completedAt: req.body.completedAt
  })
  .then(function(data){
    console.log(data);
    res.redirect("/")
  })
})


router.get('/destroy/:id', function(req, res){
  models.todolist.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(function(data){
    // console.log(data);
    res.redirect("/");
  })
});

router.post('/viewtodo/:id', function(req, res){
  models.todolist.update({
    title: req.body.title,
  }, {
    where:{
      id: req.params.id
    }
  })
  .then(function(data){
    console.log(data);
    res.redirect("/");
  })
});


router.get('/:id', function(req, res){
  models.todolist.findById(req.params.id)
  .then(function(data){
    // console.log(data);
    res.render("viewtodo", {data: data});
  })
  .catch(function(err) {
    res.redirect("/");
  })

});





module.exports = router;
