const express = require('express');
const testRouter = express.Router();
const Test = require('../models/test.model'); // test model

/* Get all Posts */
testRouter.get('/', (req, res, next) => {
    Test.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single Test */
testRouter.get("/:test_id", (req, res, next) => {
    Test.findById(req.params.test_id, function (err, result) {
        if(err){
             res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
     });
});


/* Add Single Test */
testRouter.post("/", (req, res, next) => {
  let newTest = {
    title: req.body.title,
    author: req.body.author
  };
   Test.create(newTest, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "Test created successfully"
      });
  });
});

/* Edit Single Test */
testRouter.patch("/:test_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Test.findByIdAndUpdate(req.params.test_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "Test updated successfully"
        });
  });
});

/* Delete Single Test */
testRouter.delete("/:test_id", (req, res, next) => {
  Test.findByIdAndDelete(req.params.test_id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "Test deleted successfully"
    });
  });
});

module.exports = testRouter;