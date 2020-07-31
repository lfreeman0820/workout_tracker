var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
      type: Date,
      default: () => new Date()
  },
  exercises:{
      type: Array,
      default: []
  }
});

module.exports = mongoose.model("Workout", WorkoutSchema);