const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
   title: {
       type: String,
       required: true
   },
   author: {
       type: String
   }
});

const Test = mongoose.model("Test", testSchema);
module.exports = Test;